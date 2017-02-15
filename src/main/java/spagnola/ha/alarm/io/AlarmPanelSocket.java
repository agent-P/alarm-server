/**
 * 
 */
package spagnola.ha.alarm.io;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import spagnola.ha.alarm.properties.AlarmServerProperties;
import spagnola.ha.alarm.users.AlarmUsers;

/**
 * @author spagnola
 *
 */
@Component
public class AlarmPanelSocket {
	
    /** ALarm state codes. */
    private static final String AWAY = "2";
    private static final String OFF = "1";
	
	@Autowired
	private AlarmUsers alarmUsers;
	
	private static Logger logger = LoggerFactory.getLogger(AlarmPanelSocket.class);
	
	private Socket alarmPanelSocket;
	
	private String alarmPanelHost;
	private int alarmPanelPort;
	
	private BufferedReader in;
	private PrintWriter out;

	@Autowired
	public AlarmPanelSocket(final AlarmServerProperties alarmServerProperties) {
		
		alarmPanelHost = alarmServerProperties.getPanelHost();
		alarmPanelPort = alarmServerProperties.getPanelPort();
		
		try {
			logger.info("Creating alarm panel socket, host: " + alarmPanelHost + ", port: " + alarmPanelPort);
			alarmPanelSocket = new Socket(alarmPanelHost, alarmPanelPort);
			
			try {
				in = new BufferedReader(new InputStreamReader(alarmPanelSocket.getInputStream()));
			}
			catch(Exception exception) {
				logger.error("Failed to create BufferedReader for alarm panel socket: " + exception.getMessage());
			}
			try {
				out = new PrintWriter(alarmPanelSocket.getOutputStream(), true);
			}
			catch(Exception exception) {
				logger.error("Failed to create PrintWriter for alarm panel socket: " + exception.getMessage());
			}
		}
		catch(Exception exception) {
			logger.error("Failed to create alarm panel socket: " + exception.getMessage() + " for host: " + alarmPanelHost + " port: " + alarmPanelPort);
		}
	}
	
	
	
	public void send(String command) {
		out.println(command);
	}
	
	
	public String receive() {
		try {
			return in.readLine();
		} 
		catch(IOException exception) {
			logger.error("IO Exception on alarm panel socket read attempt: " + exception.getMessage());
			return "!socket read error";
		}
	}
	
    /**
     * Send a command that requires a PIN for the argument specified user.
     *
     * @param user the IP address of the user device.
     * @param command the command that follows the user PIN
     */
    public void sendPINCommand(String user, String command) {
        if(alarmUsers.hasPIN(user)) {
            /** The user has a PIN. Get the PIN to send the command. */
            String PIN = alarmUsers.getPin(user);
            /** Send the PIN to the alarm panel. */
            out.println(PIN);
            /** Send the state alarm state code to the alarm panel. */
            out.println(command);
        }
        else {
            /** Else, the user has no PIN. Log the error as severe. */
            logger.error("Command: " + command + ", attempt with no PIN from user: " + user);
        }
    }
    
    
    /**
     * Process an "ARM" command from a user device.
     *
     * @param user the IP address of the user device.
     */
    public void arm(String user) {
        logger.warn("User device: " + user + ", sent an ARM command...");
        
        sendPINCommand(user, AWAY);
    }
    
 
    /**
     * Process an "DISARM" command from a user device.
     *
     * @param user the IP address of the user device.
     */
    public void disarm(String user) {
        logger.warn("User device: " + user + ", sent a DISARM command...");
        
        sendPINCommand(user, OFF);
    }
    
    
}
