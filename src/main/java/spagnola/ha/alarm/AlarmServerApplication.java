package spagnola.ha.alarm;

import org.springframework.beans.factory.annotation.Value;
import spagnola.ha.alarm.io.AlarmPanel;
import spagnola.ha.alarm.websocket.CmdTlmWebSocketHandler;
import spagnola.ha.alarm.client.HaServerClient;

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
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;


/**
 * Main application class of the alarm panel server. Designed to serve command and status capability
 * over a web socket and REST interface for Vista-xx alarm panels through ser2soc.
 * 
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-11
 *
 */
@EnableWebSocket
@SpringBootApplication
public class AlarmServerApplication extends SpringBootServletInitializer implements WebSocketConfigurer {

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

	
	/**
	 * Customizes the Jetty embedded servlet container to use SSL with an application properties
	 * specified key store and port.
	 * 
	 * @return the customized embedded servlet container, Jetty
	 * @throws Exception any exception thrown by the customization process
	 */
	@Bean
    public EmbeddedServletContainerCustomizer embeddedServletContainerCustomizer() throws Exception {

        /* Customize the embedded servlet container to use Jetty with an SSL connector. */
        EmbeddedServletContainerCustomizer embeddedServletContainerCustomizer = new EmbeddedServletContainerCustomizer() {
            @Override
            public void customize(ConfigurableEmbeddedServletContainer factory) {
                Assert.state(factory instanceof JettyEmbeddedServletContainerFactory, "Use Jetty for this server");
            }
        };
        
        /* Start the thread pool executor for the alarm panel reader thread. */
        taskExecutor().execute(alarmPanel.getAlarmPanelXceiver());

        /* Add the web socket handler and HA server client as observers of the alarm panel. */
        alarmPanel.addObserver(cmdTlmWebSocketHandler());
        alarmPanel.addObserver(haServerClient());
        
        return embeddedServletContainerCustomizer;
    }

	/**
	 * Register web socket handlers. Adds the <code>CmdTlmWebSocketHandler</code> object to the
	 * web socket handler registry.
	 */
	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(cmdTlmWebSocketHandler(), "/alarm-socket").withSockJS();
	}
	
	/**
	 * Create the web socket handler that interfaces to alarm terminal web applications.
	 * 
	 * @return the <code>CmdTlmWebSocketHandler</code> object that supports alarm terminal web apps
	 */
	@Bean
	public CmdTlmWebSocketHandler cmdTlmWebSocketHandler() {
		return new CmdTlmWebSocketHandler(alarmPanel);
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
			return new HaServerClient(alarmServiceUrl, keystoreFile, keystorePassword);
		}
		catch(Exception exception) {
			logger.error("Exception creating HaServerClient bean: " + exception.getMessage());
			return null;
		}
	}

}
