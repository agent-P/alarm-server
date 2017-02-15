package spagnola.ha.alarm.io;

import java.time.Duration;
import java.time.Instant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClientException;

import spagnola.ha.alarm.client.HaServerClient;
import spagnola.ha.alarm.websocket.CmdTlmWebSocketHandler;

/**
 * The <code>Runnable</code> object that receives the messages from the alarm panel
 * through ser2soc. It processes the alarm panel data frame, determines alarm state
 * change, and forwards the processed messages to websocket and REST interfaces.
 * 
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-11
 *
 */
@Component
public class AlarmPanelReader implements Runnable {
	
	private static Logger logger = LoggerFactory.getLogger(AlarmPanelReader.class);
	
	@Autowired
	AlarmPanel alarmPanel;
	
	@Autowired
	AlarmPanelSocket alarmPanelSocket;
	
	@Autowired
	CmdTlmWebSocketHandler cmdTlmWebSocketHandler;
	
	@Autowired
	HaServerClient haServerClient;
	
    private volatile boolean running = true;
    
    
    private boolean haRestInterfaceExists = true;
    
    private Instant nextRestInterfaceRetry = Instant.now();
       

    /**
     * Gets the last alarm panel status message when it is available, and updates
     * the alarm panel data frame. 
     */
	@Override
	public void run() {
		logger.info("Start alarm panel reader thread...");
        while (running) {
            String panelMessage = alarmPanelSocket.receive();
            logger.info(panelMessage);
            processAlarmPanelMessage(panelMessage);            
        }
	}

	
	/**
	 * Stops the execution of the thread by ending the loop in the <code>run()</code> 
	 * method by setting the <code>running</code> class variable to <code>false</code>.
	 */
    public void stop() {
        running = false;
    }

    
    /**
     * Processes the messages from the alarm panel. Calls the
     * broadcast method of the web socket handler to send the data frame to the 
     * websocket listeners, the REST client to forward messages to a home automation
     * server.
     *
     * @param text the data frame from the alarm panel
     */
    public void processAlarmPanelMessage(String text) {
        
        if(text.charAt(0) == '!') {
        	alarmPanel.processConfigurationMessage(text);
        }
        else {
            alarmPanel.setKeypadMessage(text);
            
            /** Detect an alarm state change. */
            if(alarmPanel.hasAlarmStateChanged()) {
                /** Process the alarm state change in the web socket handler. */
                cmdTlmWebSocketHandler.alarmPanelStateChanged();
            }
            
            /** Reset the REST interface exists flag, if the timeout has expired. */
            if(Instant.now().isAfter(nextRestInterfaceRetry)) {
            	haRestInterfaceExists = true;
            }
            
            /** 
             * Update the HA server and any web socket clients.
             */
            if(haRestInterfaceExists) {
            	/** If the REST interface exists, try to send a status message. */
            	try {
            		haServerClient.updateHaServer(text);
            	}
            	catch(RestClientException restClientException) {
            		/** If a REST client exception is caught, disable calling the REST interface,
            		 * and set a re-enable timeout. */
            		logger.warn(restClientException.getMessage());
            		logger.warn("Disabling HA REST interface.");
            		haRestInterfaceExists = false;
            		
            		/** Set the re-enable timeout to 30 seconds*/
            		nextRestInterfaceRetry = Instant.now().plus(Duration.ofSeconds(30));
            	}
            }
            
            /** Try to send a web socket broadcast message. */
            try {
    			cmdTlmWebSocketHandler.broadcastMessage("alarm-panel", text);
    		} 
            catch (Exception exception) {
            	/** If an exception is caught, log it and continue. */
    			logger.warn(exception.getMessage());
    		}
        }
        
    }

}
