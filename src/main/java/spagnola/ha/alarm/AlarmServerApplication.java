package spagnola.ha.alarm;

import org.springframework.beans.factory.annotation.Value;
import spagnola.ha.alarm.io.AlarmPanel;
import spagnola.ha.alarm.client.HaServerClient;
import spagnola.ha.alarm.configuration.JettyHttp2Customizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.jetty.JettyEmbeddedServletContainerFactory;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.util.Assert;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.eclipse.jetty.servlets.PushCacheFilter;


/**
 * Main application class of the alarm panel server. Designed to serve command and status capability
 * over a web socket and REST interface for Vista-xx alarm panels through ser2soc.
 * 
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-11
 *
 */
//@EnableAsync
@SpringBootApplication
public class AlarmServerApplication extends SpringBootServletInitializer { //implements WebSocketConfigurer {

	@Value("${ha.alarm.panel-host}")
	private String panelHost;
	@Value("${ha.alarm.panel-port}")
	private int panelPort;
	@Value("${ha.alarm.allowed-ip}")
	private String[] allowedIp;
	@Value("${ha.alarm.alarm-service-url}")
	private String alarmServiceUrl;
	@Value("${ha.alarm.keystore-file}")
	private String keystoreFile;
	@Value("${ha.alarm.keystore-pass}")
	private String keystorePassword;
	@Value("${ha.alarm.connect-timeout}")
	private int connectTimeout;
	@Value("${ha.alarm.read-timeout}")
	private int readTimeout;

	@Autowired
	AlarmPanel alarmPanel;

	/**
	 * The <code>main()</code> method of the alarm panel server application. Starts the server as a
	 * Spring application.
	 * 
	 * @param args any array of String objects passed to control the application startup, not currently used
	 */
	public static void main(String[] args) {
		
		SpringApplication.run(AlarmServerApplication.class, args);
	}

	

	@Bean
	public EmbeddedServletContainerCustomizer jettyHttp2Customizer(ServerProperties serverProperties) {
		JettyHttp2Customizer jettyHttp2Customizer = new JettyHttp2Customizer(serverProperties);

        /* Start the thread pool executor for the alarm panel reader thread. */
        taskExecutor().execute(alarmPanel.getAlarmPanelXceiver());

        /* Add the web socket handler and HA server client as observers of the alarm panel. */
//        alarmPanel.addObserver(cmdTlmWebSocketHandler());
        alarmPanel.addObserver(haServerClient());


		return jettyHttp2Customizer;
	}

	@Bean
	public FilterRegistrationBean pushCacheFilterRegistration() {
		FilterRegistrationBean registration = new FilterRegistrationBean();
		registration.setFilter(new PushCacheFilter());
		return registration;
	}


	/**
	 * Create a <code>ThreadPoolTaskExecutor</code> bean to run the thread that reads from and
	 * writes to ser2soc.
	 * 
	 * @return the <code>ThreadPoolTaskExecutor</code> object for the alarm panel reader
	 */
	@Bean
	public ThreadPoolTaskExecutor taskExecutor() {
		ThreadPoolTaskExecutor pool = new ThreadPoolTaskExecutor();
		pool.setCorePoolSize(5);
		pool.setMaxPoolSize(10);
		pool.setWaitForTasksToCompleteOnShutdown(true);
		return pool;
	}

	@Bean
    public AlarmPanel alarmPanel() { return new AlarmPanel(panelHost, panelPort, allowedIp); }

    @Bean
	public HaServerClient haServerClient() {

		try {
			return new HaServerClient(alarmServiceUrl, keystoreFile, keystorePassword, connectTimeout, readTimeout);
		}
		catch(Exception exception) {
			logger.error("Exception creating HaServerClient bean: " + exception.getMessage());
			return null;
		}
	}

}
