package spagnola.ha.alarm.client;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.time.Duration;
import java.time.Instant;
import java.util.Observable;
import java.util.Observer;

import javax.net.ssl.SSLContext;

import org.apache.http.conn.ssl.DefaultHostnameVerifier;
import org.apache.http.conn.ssl.SSLConnectionSocketFactory;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContexts;
import org.apache.http.ssl.TrustStrategy;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Component;
import org.springframework.util.ResourceUtils;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

/**
 * Provides a mechanism for the alarm panel server to send status updates to an
 * automation server through a REST PUT using SSL (https). This implementation
 * ignores trust verification errors so that the automation server can use a 
 * self signed cert.
 * 
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-11
 */
@Component
public class HaServerClient implements Observer {

	private static Logger logger = LoggerFactory.getLogger(HaServerClient.class);

	private final URI alarmServiceUri;
	private final String keyStoreFile;
	private final String keyStorePassword;
	private final int connectTimeout;
	private final int readTimeout;


	private boolean haRestInterfaceExists = true;
	private Instant nextRestInterfaceRetry = Instant.now();


	/**
	 * Constructor which uses the application properties bean to initialize class 
	 * variables for the URI of service to be called and the key store to support SSL.
	 * 
	 * @param alarmServiceUri
	 * @param keyStoreFile
	 * @param keyStorePassword
	 * @throws URISyntaxException building a URI properties specified URL
	 * @throws FileNotFoundException looking for the key store file
	 */
	public HaServerClient(String alarmServiceUri, String keyStoreFile, String keyStorePassword, int connectTimeout, int readTimeout) throws URISyntaxException, FileNotFoundException {
		this.alarmServiceUri = new URI(alarmServiceUri + "/Alarm_VDev");
		this.keyStoreFile = ResourceUtils.getFile(keyStoreFile).getAbsolutePath();
		this.keyStorePassword = keyStorePassword;
		this.connectTimeout = connectTimeout;
		this.readTimeout = readTimeout;
	}
	
	
	/**
	 * Creates an SSL context using the server key store, and sends the status
	 * message specified by the argument to the Alarm service URI specified by
	 * the service URL from the application properties using a REST template.
	 * 
	 * @param alarmStatus the status message to PUT to the alarm service of the HA server
	 * @throws RestClientException exceptions from attempting to make the REST PUT
	 */
	public void updateHaServer(String alarmStatus) throws RestClientException {
		logger.debug("Alarm service URI: " + alarmServiceUri.toString());
		logger.debug("Updating HA server with: " + alarmStatus);

		SSLContext sslContext;
		RestTemplate restTemplate = null;
		KeyStore keyStore = null;
		TrustStrategy acceptingTrustStrategy = (X509Certificate[] chain, String authType) -> true;
		
		/** Try to load the key store from a file. */
		try {
			keyStore = getKeyStore(keyStoreFile, keyStorePassword.toCharArray());
		} 
		catch (KeyStoreException | CertificateException | NoSuchAlgorithmException | IOException e) {
			logger.warn("getStore() failed: " + e.getMessage());
		}

		/** Try to set the SSL context, create the REST template, and PUT the alarm status message. */
		try {
			sslContext = SSLContexts.custom()
					.loadKeyMaterial(keyStore, keyStorePassword.toCharArray())
					// no trust store
					.loadTrustMaterial(null, acceptingTrustStrategy)
					.build();
			
			restTemplate = getRestTemplateForHTTPS(sslContext);

			restTemplate.put(alarmServiceUri, alarmStatus);
		}
		catch(RestClientException rce) {
			/** If a <code>RestClientException</code> is caught, simply throw it. */
			throw rce;
		}
		catch(Exception exception) {
			/** If any other exception is caught, simply log the message as a warning. */
			logger.warn(exception.getMessage());
		}

	}


	@Override
	public void update(Observable observable, Object object) {

		logger.debug("Observer notified...");

		JSONObject jsonObject = (JSONObject)object;
		logger.debug("object: " + jsonObject.toString());

		String type = jsonObject.getString("type");

		if(type.equals("key-pad-message")) {

			/* Reset the REST interface exists flag, if the timeout has expired. */
			if (Instant.now().isAfter(nextRestInterfaceRetry)) {
				haRestInterfaceExists = true;
			}

			/*
			 * Update the HA server and any web socket clients.
			 */
			if (haRestInterfaceExists) {
				/* If the REST interface exists, try to send a status message. */
				try {
					updateHaServer(jsonObject.getString("message"));
				} catch (RestClientException restClientException) {
					/* If a REST client exception is caught, disable calling the REST interface,
					 * and set a re-enable timeout. */
					logger.warn(restClientException.getMessage());
					logger.warn("Disabling HA REST interface.");
					haRestInterfaceExists = false;

					/* Set the re-enable timeout to 30 seconds*/
					nextRestInterfaceRetry = Instant.now().plus(Duration.ofSeconds(30));
				}
			}
		}

	}


	/**
	 * Get the server key store from the argument specified file name. Expects a key store
	 * of type <code>pkcs12</code>.
	 * @param storeFileName the file name of the key store
	 * @param password the key store password
	 * @return the <code>pkcs12 KeyStore</code> instance
	 * @throws KeyStoreException
	 * @throws IOException
	 * @throws CertificateException
	 * @throws NoSuchAlgorithmException
	 */
	protected KeyStore getKeyStore(final String storeFileName, final char[] password) throws
					KeyStoreException, IOException, CertificateException, NoSuchAlgorithmException {
		
		/** Get a <code>KeyStore</code> instance. */
		final KeyStore store = KeyStore.getInstance("pkcs12");
				
		/** Create a <code>URL</code> for the key store file, open an <code>InputStream</code>,
		 * and try to load the key store. Finally, close the <code>InputStream</code>. */
		URL url = new URL("file:" + storeFileName);		
		InputStream inputStream = url.openStream();
		try {
			store.load(inputStream, password);
		} 
		finally {
			inputStream.close();
		}
		
		/** Return the <code>KeyStore</code> object. */
		return store;
	}

	
	/**
	 * Get a REST template for the argument specified SSL context. Create an 
	 * <code>HttpComponentsClientHttpRequestFactory</code> with the SSL context, and
	 * create a new <code>RestTemplate</code> object.
	 * 
	 * @param sslContext the SSL context for the REST template
	 * @return the new <code>RestTemplate</code> object
	 */
	private RestTemplate getRestTemplateForHTTPS(SSLContext sslContext) {
		
		/** Create an <code>HttpComponentsClientHttpRequestFactory</code> with the SSL context. */
		SSLConnectionSocketFactory connectionFactory = new SSLConnectionSocketFactory(sslContext, new DefaultHostnameVerifier());
		CloseableHttpClient closeableHttpClient = HttpClients.custom().setSSLSocketFactory(connectionFactory).build();
		HttpComponentsClientHttpRequestFactory httpRequestFactory = new HttpComponentsClientHttpRequestFactory();
		httpRequestFactory.setConnectTimeout(connectTimeout);
		httpRequestFactory.setReadTimeout(readTimeout);
		httpRequestFactory.setHttpClient(closeableHttpClient);
		
		/** Return the new <code>RestTemplate</code> object created with the <code>HttpComponentsClientHttpRequestFactory</code>. */
		return new RestTemplate(httpRequestFactory);
	}

}
