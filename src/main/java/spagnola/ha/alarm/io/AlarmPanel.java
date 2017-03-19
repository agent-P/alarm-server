/**
 * 
 */
package spagnola.ha.alarm.io;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonCreator;
import spagnola.ha.alarm.users.AlarmUsers;

import java.util.Observable;
import java.util.Stack;

/**
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-14
 *
 */
@Component
public class AlarmPanel extends Observable {
	private static Logger logger = LoggerFactory.getLogger(AlarmPanel.class);

	/** Alarm command codes. */
	private static final String AWAY = "2";
	private static final String OFF = "1";

    private static final String[] alarmStateStrings = {
            "ARMED_STAY",
            "ARMED_AWAY",
            "ARMED_MAX",
            "ARMED_INSTANT",
            "DISARMED",
            "DISARMED_CHIME",
            "DISARMED_TEST",
			"UNKNOWN"
    };
        
    /** The alarm panel state constants */
    public static final int ARMED_STAY     = 0;
    public static final int ARMED_AWAY     = 1;
    public static final int ARMED_MAX      = 2;
    public static final int ARMED_INSTANT  = 3;
    public static final int DISARMED       = 4;
    public static final int DISARMED_CHIME = 5;
	public static final int DISARMED_TEST  = 6;
	public static final int UNKNOWN        = 7;

    private static int alarmState = UNKNOWN;
    
    private static boolean alarmStateChanged = false;
    
    private static StringBuffer bitField = new StringBuffer();
    private static StringBuffer numericCode = new StringBuffer();
    private static StringBuffer rawData = new StringBuffer();
    private static StringBuffer keypadText = new StringBuffer();
    
    public static final int BIT_FIELD_INDEX = 1;
    public static final int NUMERIC_CODE_INDEX = 3;
    public static final int RAW_DATA_INDEX = 5;
    public static final int KEYPAD_TEXT_INDEX = 7;

    private AlarmPanelXceiver alarmPanelXceiver;

    private AlarmUsers alarmUsers;

	/** Stack of pressed keys. Used for capturing user specific PIN during alarm state changes. */
	private Stack<Character> keyPressedStack = new Stack<Character>();

	private String currentUserDevice = null;


	/**
	 * Constructor
	 *
	 * @param panelHost
	 * @param panelPort
	 * @param allowedIp
	 */
	public AlarmPanel(String panelHost, int panelPort, String[] allowedIp) {

		alarmPanelXceiver = new AlarmPanelXceiver(this, panelHost, panelPort);

		alarmUsers = new AlarmUsers(allowedIp);

	}
	
	
	public void setKeypadMessage(String keypadMessage) {
		
		/* Split the <code>String</code> object argument into its components. */
        String delimiters = "[,\\[\\]]";
        String tokens[] = keypadMessage.split(delimiters);
        
        /* Clear and set the <code>StringBuffer</code> objects for the keypad message components. */
        bitField.setLength(0);
        bitField.append(tokens[BIT_FIELD_INDEX]);
        numericCode.setLength(0);
        numericCode.append(tokens[NUMERIC_CODE_INDEX]);
        rawData.setLength(0);
        rawData.append(tokens[RAW_DATA_INDEX]);
        keypadText.setLength(0);
        keypadText.append(tokens[KEYPAD_TEXT_INDEX]);

        /* Get the alarm state from the bit field of the new message. */
        int newAlarmState = getAlarmStateFromBitfield();
        
        /* If the alarm state has changed, set the flag, and update the alarm state. */
        if(newAlarmState != alarmState) {
        	alarmStateChanged = true;
        	alarmState = newAlarmState;
            /* Log the alarm state change. */
            logger.warn("Alarm state changed to: " + getAlarmStateString());

            /* Process the state change. */
            alarmPanelStateChanged();
        }
        else {
        	alarmStateChanged = false;
        }

        logger.debug("Notifying observers...");

		/* Notify the observers that there is a new data string from the alarm panel.
		   Set the Observable state to "changed", and notify the Observers. */
		setChanged();

		JSONObject jsonObject = new JSONObject();
		jsonObject.put("type", "key-pad-message");
		jsonObject.put("ready", String.valueOf(isReady()));
		jsonObject.put("armedAway", String.valueOf(isArmedAway()));
		jsonObject.put("armedStay", String.valueOf(isArmedStay()));
		jsonObject.put("keypadBacklight", isBacklightOn() ? "on" : "off");
		jsonObject.put("programmingMode", String.valueOf(isInProgrammingMode()));
		jsonObject.put("messageBeeps", Integer.toString(numberOfBeepsForMessage()));
		jsonObject.put("zoneBypassed", String.valueOf(isZoneBypassed()));
		jsonObject.put("acPower", isOnACPower() ? "on" : "off");
		jsonObject.put("chime", isChimeEnabled() ? "enabled" : "disabled");
		jsonObject.put("alarmOccurred", String.valueOf(hasAlarmOccured()));
		jsonObject.put("alarmSounding", String.valueOf(isAlarmSounding()));
		jsonObject.put("battery", isBatteryLow() ? "low" : "ok");
		jsonObject.put("entryDelay", isEntryDelayOff() ? "off" : "on");
		jsonObject.put("systemIssue", String.valueOf(hasSystemIssue()));
		jsonObject.put("keypadText", keypadText.toString());

		notifyObservers(jsonObject);

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
			setChanged();

			JSONObject jsonObject = new JSONObject();
			jsonObject.put("type", "authentication-message");
			jsonObject.put("message", "PIN");
			notifyObservers(jsonObject);
		}
		else {
			logger.warn("PIN incorrect length. PIN not set.");
		}

		/** Clean up the keyPressedStack. */
		keyPressedStack.removeAllElements();

	}


	public void keyPress(String currentUserDevice, char key) {
		this.currentUserDevice = currentUserDevice;
		keyPressedStack.push(key);
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
	 * Process a "DISARM" command from a user device.
	 *
	 * @param user the IP address of the user device.
	 */
	public void disarm(String user) {
		logger.warn("User device: " + user + ", sent a DISARM command...");

		sendPINCommand(user, OFF);
	}

	/**
	 * Send a command that requires a PIN for the argument specified user.
	 *
	 * @param user the IP address of the user device.
	 * @param command the command that follows the user PIN
	 */
	public void sendPINCommand(String user, String command) {
		if(alarmUsers.hasPIN(user)) {
			/* The user has a PIN. Get the PIN to send the command. */
			String PIN = alarmUsers.getPin(user);
			/* Send the PIN and the state alarm state code to the alarm panel. */
			alarmPanelXceiver.transmit(PIN + command);
		}
		else {
			/** Else, the user has no PIN. Log the error as severe. */
			logger.error("Command: " + command + ", attempt with no PIN from user: " + user);
		}
	}

	private int getAlarmStateFromBitfield() {
		
		int newAlarmState = DISARMED;
		
        /* Derive the alarm panel state from the status characters. */
        if(bitField.charAt(0) == '1') {
            /* Found a disarmed state. Find the sub state. */
            if(bitField.charAt(8) == '1') {
            	newAlarmState = DISARMED_CHIME;
            }
            else if(bitField.charAt(5) == '1' && (alarmState == DISARMED || alarmState == DISARMED_TEST)) {
            	newAlarmState = DISARMED_TEST;
            }
            else {
            	newAlarmState = DISARMED;
            }
        }
        else if(bitField.charAt(1) == '1' || bitField.charAt(2) == '1') {
            /* Found an armed state. Find the sub state. */
            if(bitField.charAt(2) == '1' && bitField.charAt(12) == '0') {
            	newAlarmState = ARMED_STAY;
            }
            else if(bitField.charAt(1) == '1' && bitField.charAt(12) == '0') {
            	newAlarmState = ARMED_AWAY;
            }
            else if(bitField.charAt(2) == '1' && bitField.charAt(12) == '1') {
            	newAlarmState = ARMED_INSTANT;
            }
            else if(bitField.charAt(1) == '1' && bitField.charAt(12) == '1') {
            	newAlarmState = ARMED_MAX;
            }
        }
        else {
        	if (bitField.charAt(0) == '0' && bitField.charAt(1) == '0' && bitField.charAt(2) == '0') {
        		if(bitField.charAt(8) == '1' && bitField.charAt(5) == '3') {
                	newAlarmState = DISARMED_CHIME;
                }
        		else if(bitField.charAt(8) == '0' && bitField.charAt(5) == '3') {
        			newAlarmState = DISARMED_TEST;
        		}
        		else {
        			newAlarmState = DISARMED;
        		}
        	}
        }

        return newAlarmState;
	}
	
	
	public void processConfigurationMessage(String message) {
		logger.warn("panel configuration message: " + message);
		logger.warn("Panel configuration messages are NOT supported!");
	}


	public AlarmPanelXceiver getAlarmPanelXceiver() {
		return alarmPanelXceiver;
	}


	public boolean isAllowed(String ipAddress) {
		return alarmUsers.isAllowed(ipAddress);
	}

	public boolean hasPIN(String ipAddress) {
		return alarmUsers.hasPIN(ipAddress);
	}


	/**
	 * @return the alarmState
	 */
	public int getAlarmState() {
		return alarmState;
	}
	
	
	@JsonCreator
	public String getAlarmStateString() {
		return alarmStateStrings[alarmState];
	}

	
	public boolean hasAlarmStateChanged() {
		return alarmStateChanged;
	}
	
	
	public String getBitField() {
		return bitField.toString();
	}
	
	public char getCharAtBitField(int index) {
		return bitField.charAt(index);
	}
	
	
	public String getNumericCode() {
		return numericCode.toString();
	}
	
	
	public String getRawData() {
		return rawData.toString();
	}

	
	public String getKeypadText() {
		return keypadText.toString();
	}
	
	
	public String getKeypadAddressMask() {
		return rawData.substring(1, 8);
	}

	
	public boolean isReady() {
		if(bitField.charAt(0) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isArmedAway() {
		if(bitField.charAt(1) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isArmedStay() {
		if(bitField.charAt(2) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isBacklightOn() {
		if(bitField.charAt(3) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isInProgrammingMode() {
		if(bitField.charAt(4) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public int numberOfBeepsForMessage() {
		return Character.getNumericValue(bitField.charAt(5));
	}
	
	
	public boolean isZoneBypassed() {
		if(bitField.charAt(6) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isOnACPower() {
		if(bitField.charAt(7) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isChimeEnabled() {
		if(bitField.charAt(8) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean hasAlarmOccured() {
		if(bitField.charAt(9) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isAlarmSounding() {
		if(bitField.charAt(10) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isBatteryLow() {
		if(bitField.charAt(11) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isEntryDelayOff() {
		if(bitField.charAt(12) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isAlarmFire() {
		if(bitField.charAt(13) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean hasSystemIssue() {
		if(bitField.charAt(14) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isArmedPerimeterOnly() {
		if(bitField.charAt(15) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isErrorReportSystemSpecific() {
		if(bitField.charAt(16) == '1') {
			return true;
		}
		
		return false;
	}
	
	
	public boolean isAdemcoDSCModeAorD() {
		if(bitField.charAt(17) == '1') {
			return true;
		}
		
		return false;
	}
}
