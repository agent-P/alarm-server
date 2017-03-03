package spagnola.ha.alarm.io;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * The <code>Runnable</code> object that manages the alarm panel socket, and
 * sends and receives the messages to and from the alarm panel through ser2sock.
 * 
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-11
 *
 */
public class AlarmPanelXceiver implements Runnable {
	
	private static Logger logger = LoggerFactory.getLogger(AlarmPanelXceiver.class);
	

	private AlarmPanel alarmPanel;

	private AlarmPanelSocket alarmPanelSocket;

    private volatile boolean running = true;

    private static final long MIN_TIMEOUT = 5000; // Five (5) seconds
    private static final long MAX_TIMEOUT = 3000000; // Five (5) minutes
    private long alarmPanelSocketRetryTimeout = MIN_TIMEOUT;


	/**
	 * Constructor
	 */
	public AlarmPanelXceiver(AlarmPanel parent, String alarmPanelHost, int alarmPanelPort) {
		alarmPanel = parent;
		alarmPanelSocket = new AlarmPanelSocket(alarmPanelHost, alarmPanelPort);
	}


	/**
     * Gets the last alarm panel status message when it is available, and updates
     * the alarm panel data frame. If the alarm panel socket is not connected or the
	 * message received from the panel is <code>null</code>, a socket restart algorithm
	 * is initiated. Note a <code>null</code> message is an indicator that the socket
	 * has disconnected.
     */
	@Override
	public void run() {
		logger.info("Start alarm panel reader thread...");
        while (running) {

			if(alarmPanelSocket.isConnected()) {

				String panelMessage = alarmPanelSocket.receive();
				if(panelMessage == null) {
					logger.error("Alarm Panel message is NULL! Restarting alarm panel socket...");
					restartSocket();
				}
				else {
					logger.debug(panelMessage);
					alarmPanelSocketRetryTimeout = MIN_TIMEOUT;
					processAlarmPanelMessage(panelMessage);
				}
			}
			else {
				logger.error("Alarm Panel Socket not connected. Restarting alarm panel socket...");
				restartSocket();
			}
         }
	}


	public void transmit(String command) {
		alarmPanelSocket.transmit(command);
	}

	
	/**
	 * Stops the execution of the thread by ending the loop in the <code>run()</code> 
	 * method by setting the <code>running</code> class variable to <code>false</code>.
	 */
    public void stop() {
        running = false;
    }


	/**
	 * Restarts the alarm panel socket after a progressive delay that starts at five (5)
	 * seconds and maxes out at five (5) minutes.
	 */
	private void restartSocket() {
		try {
			Thread.sleep(alarmPanelSocketRetryTimeout);
			alarmPanelSocketRetryTimeout = alarmPanelSocketRetryTimeout * 2;
			if(alarmPanelSocketRetryTimeout > MAX_TIMEOUT) {
				alarmPanelSocketRetryTimeout = MAX_TIMEOUT;
			}
		} catch (InterruptedException exception) {
			logger.error("Alarm Panel Socket reconnect delay failed: " + exception.getMessage());
		}
		alarmPanelSocket.createAlarmPanelSocket();

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
            
        }
    }

}
