package spagnola.ha.alarm.properties;

import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("ha.alarm")
public class AlarmServerProperties {
	private int serverPort;
	private int readTimeout;
	private int connectTimeout;
	private String username;
	private char[] password;
	private String alarmServiceUrl;
	private String keystoreFile;
	private String keystorePass;
	private List<String> allowedIp;
	private int panelPort;
	private String panelHost;
	
	/**
	 * @return the readTimeout
	 */
	public int getReadTimeout() {
		return readTimeout;
	}
	/**
	 * @param readTimeout the readTimeout to set
	 */
	public void setReadTimeout(int readTimeout) {
		this.readTimeout = readTimeout;
	}
	/**
	 * @return the connectTimeout
	 */
	public int getConnectTimeout() {
		return connectTimeout;
	}
	/**
	 * @param connectTimeout the connectTimeout to set
	 */
	public void setConnectTimeout(int connectTimeout) {
		this.connectTimeout = connectTimeout;
	}
	/**
	 * @return the username
	 */
	public String getUsername() {
		return username;
	}
	/**
	 * @param username the username to set
	 */
	public void setUsername(String username) {
		this.username = username;
	}
	/**
	 * @return the password
	 */
	public char[] getPassword() {
		return password;
	}
	/**
	 * @param password the password to set
	 */
	public void setPassword(char[] password) {
		this.password = password;
	}
	/**
	 * @return the alarmServiceUrl
	 */
	public String getAlarmServiceUrl() {
		return alarmServiceUrl;
	}
	/**
	 * @param alarmServiceUrl the alarmServiceUrl to set
	 */
	public void setAlarmServiceUrl(String alarmServiceUrl) {
		this.alarmServiceUrl = alarmServiceUrl;
	}
	/**
	 * @return the serverPort
	 */
	public int getServerPort() {
		return serverPort;
	}
	/**
	 * @param serverPort the serverPort to set
	 */
	public void setServerPort(int serverPort) {
		this.serverPort = serverPort;
	}
	/**
	 * @return the keystoreFile
	 */
	public String getKeystoreFile() {
		return keystoreFile;
	}
	/**
	 * @param keystoreFile the keystoreFile to set
	 */
	public void setKeystoreFile(String keystoreFile) {
		this.keystoreFile = keystoreFile;
	}
	/**
	 * @return the keystorePass
	 */
	public String getKeystorePass() {
		return keystorePass;
	}
	/**
	 * @param keystorePass the keystorePass to set
	 */
	public void setKeystorePass(String keystorePass) {
		this.keystorePass = keystorePass;
	}
	/**
	 * @return the allowedIp
	 */
	public List<String> getAllowedIp() {
		return allowedIp;
	}
	/**
	 * @param allowedIp the allowedIp to set
	 */
	public void setAllowedIp(List<String> allowedIp) {
		this.allowedIp = allowedIp;
	}
	/**
	 * @return the panelPort
	 */
	public int getPanelPort() {
		return panelPort;
	}
	/**
	 * @param panelPort the panelPort to set
	 */
	public void setPanelPort(int panelPort) {
		this.panelPort = panelPort;
	}
	/**
	 * @return the panelHost
	 */
	public String getPanelHost() {
		return panelHost;
	}
	/**
	 * @param panelHost the panelHost to set
	 */
	public void setPanelHost(String panelHost) {
		this.panelHost = panelHost;
	}
	
	
}
