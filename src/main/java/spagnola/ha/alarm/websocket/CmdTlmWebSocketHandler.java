/**
 * 
 */
package spagnola.ha.alarm.websocket;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Stack;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import spagnola.ha.alarm.io.AlarmPanelSocket;
import spagnola.ha.alarm.users.AlarmUsers;


/**
 * @author spagnola
 *
 */
public class CmdTlmWebSocketHandler extends TextWebSocketHandler {
	
	@Autowired
	private AlarmUsers alarmUsers;
	
	@Autowired
	private AlarmPanelSocket alarmPanelSocket;

	private static Logger logger = LoggerFactory.getLogger(CmdTlmWebSocketHandler.class);
	
	private static ArrayList<WebSocketSession> sessions = new ArrayList<WebSocketSession>();
	
	/** Stack of pressed keys. Used for capturing user specific PIN during alarm state changes. */
    private Stack<Character> keyPressedStack = new Stack<Character>();
	
    /** Last message received from alarm panel. To broadcast immediately on connect. Initialized to null. */
    private static JSONObject lastMessage = null;
    
    private static final String SYSTEM_DEVICE = "system";
    
    private WebSocketSession currentSession;
    private String currentUserDevice;
    
    
	public CmdTlmWebSocketHandler() {		
	}

	@Override
	public void afterConnectionEstablished(WebSocketSession session) {
		
		String ipAddress = session.getRemoteAddress().getAddress().getHostAddress();
		logger.warn("Connection attempt from IP Address: " + ipAddress);
		logger.info("Opened new session in instance " + this);

		if(alarmUsers.isAllowed(ipAddress)) {
			currentSession = session;
			sessions.add(session);
			
				send(session, "authentication", "access granted");
			
            /** Notify the device if it has a stored PIN. */
            if(alarmUsers.hasPIN(ipAddress)) {
                send(session, "authentication", "PIN");
                logger.info("user: " + ipAddress + ", has a PIN.");
            }
            else {
                send(session, "authentication", "NO PIN");
                logger.info("user: " + ipAddress + ", does not have a PIN.");
            }
    		
            /** If the last message from the alarm panel is not null, send it to the connecting
             *  client to give fast current status. Don't want to wait until next broadcast.
             */
            if(lastMessage != null) {
        		try {
        			session.sendMessage(new TextMessage(lastMessage.toString()));
        		} 
        		catch(IOException exception) {
        			logger.debug("Attempted to send lastMessage: " + lastMessage.toString());
        			logger.warn(exception.getMessage());
        		}
            }
            
            /** Notify all connected devices that a new device has connected. */
            broadcastMessage(SYSTEM_DEVICE, ipAddress + " has connected.");
		}
		else {
			logger.warn("IP Address: " + ipAddress + " is NOT allowed.");
			send(session, "authentication", "access denied");

			try {
				session.close(CloseStatus.POLICY_VIOLATION);
			}
			catch(Exception exception) {
				logger.warn("Close attempted for policy violation: " + exception.getMessage());
			}
			
            broadcastMessage(SYSTEM_DEVICE, "Unauthorized connection attempt from: " + ipAddress);
            logger.warn("IP Address: " + ipAddress + " not authorized.");
		}   
	}
	
	
	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {
		logger.info(session.getId() + ": connection closed...");
		sessions.remove(session);
		broadcastMessage(SYSTEM_DEVICE, session.getRemoteAddress().getAddress().getHostAddress() + " disconnected.");
	}

	
	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
		
		logger.debug("Received message from remote IP: " + session.getRemoteAddress().getAddress());
		logger.debug("Received message from remote IP port: " + session.getRemoteAddress().getPort());
		logger.debug("Received message from URI: " + session.getUri());
		
		StringBuffer response = new StringBuffer("");
		String user = session.getRemoteAddress().getAddress().toString();
		
		currentSession = session;
		currentUserDevice = user;
		
		String data = message.getPayload();
        if(data.length() == 1) {
            switch(data.charAt(0)) {
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '*':
                case '#':
                    keyPressedStack.push(data.charAt(0));
                    response.append("Key press: " + data.charAt(0));
                    break;
                default:
                    response.append("unknown key...");
                    logger.warn("Unexpected data: " + data + " from user: " + user);
                    break;
            }
            send(session, user, response.toString());
            alarmPanelSocket.send(data);
        }
        else {
            if(data.equals("ARM")) {
            	alarmPanelSocket.arm(user);
            }
            else if(data.equals("DISARM")) {
            	alarmPanelSocket.disarm(user);
            }
            else {
                logger.warn("Data: " + data + " rejected from user: " + user);
            }
        }
	}

	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception)
			throws Exception {
		session.close(CloseStatus.SERVER_ERROR);
	}
	
    /**
     * Sends the messages from the alarm controller and alarm panels to the argument
     * specified web socket.
     *
     * @param session the web socket session to send the message to
     * @param device the device identifier of the device sending the message
     * @param text the text message
     */
    public void send(WebSocketSession session, String device, String text) {
        
		final String timestamp = getTimeStamp();

		logger.debug("Sending: " + text);
        final JSONObject jsonMessage = toJsonp(device, text, timestamp);
                
        lastMessage = jsonMessage;

		try {
			session.sendMessage(new TextMessage(jsonMessage.toString()));
		} 
		catch(IOException exception) {
			logger.warn(exception.getMessage());
		}
   }
    
    
	/**
	 * Broadcast the <code>String</code> argument <code>message</code> to all active web socket sessions.
	 * 
	 * @param device the device identifier of the device sending the message
	 * @param message the <code>String</code> message to send
	 */
	public void broadcastMessage(String device, String message) {
		
		for(WebSocketSession sessionInstance : sessions) {
			logger.debug("Sending message to: " + sessionInstance.getId());
			send(sessionInstance, device, message);
		}

	}
	
	
	/**
	 * 
	 */
	public void alarmPanelStateChanged() {
        final int CMD_SIZE = 5;
        
        StringBuffer str = new StringBuffer(CMD_SIZE);
        /** Pop last 5 key presses off the keyPressedStack. */
        for(int i=0; i<CMD_SIZE; i++) {
            if(!keyPressedStack.empty()) {
                char key = keyPressedStack.pop();
                logger.info("key press: " + key);
                if(i>0) {
                    logger.info("adding key to PIN: " + key);
                    str.insert(0, key);
                }
            }
        }
        logger.info("PIN: " + str);
        
        if(str.length() == 4) {
            /** StringBuffer is the right length, set the PIN for the current user. */
            alarmUsers.setPin(currentUserDevice, str.toString());
            
            /** Notify the current user that a PIN is now stored. */
            send(currentSession, "authentication", "PIN");
        }
        else {
            logger.warn("PIN incorrect length. PIN not set.");
        }
        
        /** Clean up the keyPressedStack. */
        keyPressedStack.removeAllElements();
		
	}
	
	
    /**
     * Returns a "now" time stamp in the form <code>yyyy/MM/dd HH:mm:ss</code>
     * 
     * @return the current time in time stamp format: <code>yyyy/MM/dd HH:mm:ss</code>
     */
    private String getTimeStamp() {
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        final String timestamp = dateFormat.format(date);

        return timestamp;
    }
    
    
    /**
     * Create the JSON string to broadcast to the keypad clients.
     *
     * @param name  the device that generated the message
     * @param message  the message
     * @param timestamp  the date and time of the message
     * @return the generated JSON message as a JSONObject object
     */
    private static JSONObject toJsonp(String name, String message, String timestamp) {
    	JSONObject jsonString = new JSONObject();
    	
    	jsonString.putOnce("name", name);
    	jsonString.putOnce("message", escape(message));
    	jsonString.putOnce("timestamp", timestamp);
    	
    	return jsonString;
    }

    
    /**
     * Handle special characters in the input argument String object to
     * produce a html readable string.
     *
     * @param originalString  the String object to be processed for special characters.
     * @return the corrected String object
     */
    private static String escape(String originalString) {
        StringBuilder buffer = new StringBuilder(originalString.length());

        for(int i = 0; i < originalString.length(); i++) {
            char c = originalString.charAt(i);
            switch(c) {
                case '\b':
                    buffer.append("\\b");
                    break;
                case '\f':
                    buffer.append("\\f");
                    break;
                case '\n':
                    buffer.append("<br />");
                    break;
                case '\r':
                    // ignore
                    break;
                case '\t':
                    buffer.append("\\t");
                    break;
                case '\'':
                    buffer.append("\\'");
                    break;
                case '\"':
                    buffer.append("/");
                    break;
                case '\\':
                    buffer.append("\\\\");
                    break;
                case '<':
                    buffer.append("&lt;");
                    break;
                case '>':
                    buffer.append("&gt;");
                    break;
                case '&':
                    buffer.append("&amp;");
                    break;
                default:
                    buffer.append(c);
            }
        }

        return buffer.toString();
    }
    
}
