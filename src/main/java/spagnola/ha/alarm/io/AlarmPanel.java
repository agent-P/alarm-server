/**
 * 
 */
package spagnola.ha.alarm.io;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import spagnola.ha.alarm.properties.AlarmServerProperties;

/**
 * @author Perry Spagnola
 * @version 1.0
 * @since 2017-02-14
 *
 */
@Component
public class AlarmPanel {
	private static Logger logger = LoggerFactory.getLogger(AlarmPanel.class);
	
	@Autowired
	AlarmPanelSocket alarmPanelSocket;
	
    private static final String[] alarmStateStrings = {
            "ARMED_STAY",
            "ARMED_AWAY",
            "ARMED_MAX",
            "ARMED_INSTANT",
            "DISARMED",
            "DISARMED_CHIME",
            "DISARMED_TEST"
    };
        
    /** The alarm panel state constants */
    public static final int ARMED_STAY     = 0;
    public static final int ARMED_AWAY     = 1;
    public static final int ARMED_MAX      = 2;
    public static final int ARMED_INSTANT  = 3;
    public static final int DISARMED       = 4;
    public static final int DISARMED_CHIME = 5;
    public static final int DISARMED_TEST  = 6;

    private static int alarmState = DISARMED;
    
    private static boolean alarmStateChanged = false;
    
    private static StringBuffer bitField = new StringBuffer();
    private static StringBuffer numericCode = new StringBuffer();
    private static StringBuffer rawData = new StringBuffer();
    private static StringBuffer keypadText = new StringBuffer();
    
    public static final int BIT_FIELD_INDEX = 1;
    public static final int NUMERIC_CODE_INDEX = 3;
    public static final int RAW_DATA_INDEX = 5;
    public static final int KEYPAD_TEXT_INDEX = 7;
    
	@Autowired
	public AlarmPanel(final AlarmServerProperties alarmServerProperties) {
	}
	
	
	public void setKeypadMessage(String keypadMessage) {
		
		/** Split the <code>String</code> object argument into its components. */
        String delimiters = "[,\\[\\]]";
        String tokens[] = keypadMessage.split(delimiters);
        
        /** Clear and set the <code>StringBuffer</code> objects for the keypad message components. */
        bitField.setLength(0);
        bitField.append(tokens[BIT_FIELD_INDEX]);
        numericCode.setLength(0);
        numericCode.append(tokens[NUMERIC_CODE_INDEX]);
        rawData.setLength(0);
        rawData.append(tokens[RAW_DATA_INDEX]);
        keypadText.setLength(0);
        keypadText.append(tokens[KEYPAD_TEXT_INDEX]);

        /** Get the alarm state from the bit field of the new message. */
        int newAlarmState = getAlarmStateFromBitfield();
        
        /** If the alarm state has changed, set the flag, and update the alarm state. */
        if(newAlarmState != alarmState) {
        	alarmStateChanged = true;
        	alarmState = newAlarmState;
            /** Log the alarm state change. */
            logger.warn("Alarm state changed to: " + getAlarmStateString());
        }
        else {
        	alarmStateChanged = false;
        }
	}
	
	
	private int getAlarmStateFromBitfield() {
		
		int newAlarmState = DISARMED;
		
        /** Derive the alarm panel state from the status characters. */
        if(bitField.charAt(0) == '1') {
            /** Found a disarmed state. Find the sub state. */
            if(bitField.charAt(3) == '0' && bitField.charAt(5) == '1') {
            	newAlarmState = DISARMED_TEST;
            }
            else if(bitField.charAt(3) == '1' && bitField.charAt(5) == '1' && bitField.charAt(8) == '1') {
            	newAlarmState = DISARMED_CHIME;
            }
            else {
            	newAlarmState = DISARMED;
            }
        }
        else {
            /** Found an armed state. Find the sub state. */
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

        return newAlarmState;
	}
	
	
	public void processConfigurationMessage(String message) {
		logger.warn("panel configuration message: " + message);
		logger.warn("Panel configuration messages are NOT supported");

	}
	
	
	/**
	 * @return the alarmState
	 */
	public int getAlarmState() {
		return alarmState;
	}
	
	
	public String getAlarmStateString() {
		return alarmStateStrings[alarmState];
	}

	
	public boolean hasAlarmStateChanged() {
		return alarmStateChanged;
	}

}
