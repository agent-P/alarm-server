package spagnola.ha.alarm;

import spagnola.ha.alarm.io.AlarmPanelReader;
import spagnola.ha.alarm.properties.AlarmServerProperties;
import spagnola.ha.alarm.websocket.CmdTlmWebSocketHandler;

import org.eclipse.jetty.server.Connector;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.ServerConnector;
import org.eclipse.jetty.util.ssl.SslContextFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.ConfigurableEmbeddedServletContainer;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.jetty.JettyEmbeddedServletContainerFactory;
import org.springframework.boot.context.embedded.jetty.JettyServerCustomizer;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.util.Assert;
import org.springframework.util.ResourceUtils;
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
	
		
	@Autowired
	private AlarmServerProperties alarmServerProperties;
	
	@Autowired
	AlarmPanelReader alarmPanelReader;

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
        final String absoluteKeystoreFile = ResourceUtils.getFile(alarmServerProperties.getKeystoreFile()).getAbsolutePath();
        
        /** Customize the embedded servlet container to use Jetty with an SSL connector. */
        EmbeddedServletContainerCustomizer embeddedServletContainerCustomizer = new EmbeddedServletContainerCustomizer() {
            @Override
            public void customize(ConfigurableEmbeddedServletContainer factory) {
                Assert.state(factory instanceof JettyEmbeddedServletContainerFactory, "Use Jetty for this server");
                JettyEmbeddedServletContainerFactory jettyFactory = (JettyEmbeddedServletContainerFactory) factory;
                jettyFactory.addServerCustomizers(new JettyServerCustomizer() {

                    @Override
                    public void customize(Server server) {
                        SslContextFactory sslContextFactory = new SslContextFactory();
                        sslContextFactory.setKeyStorePath(absoluteKeystoreFile);
                        sslContextFactory.setKeyStorePassword(alarmServerProperties.getKeystorePass());
                        sslContextFactory.setKeyStoreType("PKCS12");

                        ServerConnector sslConnector = new ServerConnector(	server, sslContextFactory);
                        sslConnector.setPort(alarmServerProperties.getServerPort());
                        server.setConnectors(new Connector[] { sslConnector });
                    }
                });
            }
        };
        
        /** Start the thread pool executor for the alarm panel reader thread. */
        taskExecutor().execute(alarmPanelReader);
        
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
		return new CmdTlmWebSocketHandler();
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

}
