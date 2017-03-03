/**
 * 
 */
package spagnola.ha.alarm.users;

import java.util.HashMap;
import java.util.regex.Pattern;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import spagnola.ha.alarm.properties.AlarmServerProperties;

/**
 * @author spagnola
 * @version 1.0
 * @since 2017-02-11
 *
 */
public class AlarmUsers {
	
	private static Logger logger = LoggerFactory.getLogger(AlarmUsers.class);

	
	public static HashMap<String, AlarmUser> allowedUsers = new HashMap<String, AlarmUser>();
	
	
	public AlarmUsers(String[] allowedIp) {
		
		for(String ipString: allowedIp) {
			addUserForIP(ipString);
		}
	}

	
	/**
	 * 
	 * @param ipAddress the IP address of the alarm user's device
	 */
	public void addUserForIP(String ipAddress) {
		
		/** First, make sure the string is a valid IP address. */
        final String IPADDRESS_PATTERN = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
        final Pattern pattern = Pattern.compile(IPADDRESS_PATTERN);
        
        if(pattern.matcher(ipAddress).matches()) {
        	/** If the string is a valid IP address, attempt to add it to the allowed users list. */
        	if(getUserForIP(ipAddress) == null) {
        		allowedUsers.put(ipAddress, new AlarmUser(ipAddress));
        	}
        	else {
        		logger.warn("User device IP address: " + ipAddress + " already exists.");
        	}
        }
        else {
        	logger.warn("User device IP address: " + ipAddress + " is not valid.");
        }
	}
    
    
	/**
	 * 
	 * @param ipAddress the IP address of the alarm user's device
	 * @return the <code>AlarmUser</code> object for the argument specified IP address
	 */
	public AlarmUser getUserForIP(String ipAddress) {
		return allowedUsers.get(ipAddress);
	}
	
	
	/**
	 * Sets the personal identification number (PIN) of the user device specified by
	 * the <code>ipAddress</code> argument.
	 * 
	 * @param ipAddress the IP address of the user device
	 * @param pin the PIN (personal identification number) of the user
	 */
	public void setPin(String ipAddress, String pin) {
		AlarmUser user = allowedUsers.get(ipAddress);
		
		if(user != null) {
			user.setPin(pin);
		}
		else {
			logger.warn("Could not set PIN for user device: " + ipAddress);
		}
	}
	
	
	/**
	 * Gets the personal identification number (PIN) of the user device specified by
	 * the <code>ipAddress</code> argument.
	 * 
	 * @param ipAddress the IP address of the user device to retrieve the PIN for
	 * @return the PIN (personal identification number) of the user
	 */
	public String getPin(String ipAddress) {
		AlarmUser user = allowedUsers.get(ipAddress);
		
		if(user != null) {
			return user.getPin();
		}
	
		return "";
	}
	
	
	/**
	 * Checks to see if the argument specified user device is allowed to access the server.
	 * 
	 * @param ipAddress the IP address of the user device being checked
	 * @return <code>true</code> if the user device is allowed, <code>false</code> if not
	 */
	public boolean isAllowed(String ipAddress) {
		
		if(getUserForIP(ipAddress) != null) {
			return true;
		}
		
		return false;
	}
	
	
    /**
     * Method to determine if the IP address argument has an associated PIN stored.
     * @param ipAddress  the IP address to test for an associated PIN
     *
     * @return <code>true</code> if has a PIN, <code>false</code> if not.
     */
    public boolean hasPIN(String ipAddress) {
    	AlarmUser user = allowedUsers.get(ipAddress);
        
        if(user != null) {
        	if(user.getPin() != null) {
        		logger.info("PIN for: " + ipAddress + " is: not NULL");
        		return true;
        	}
        }
        
        return false;
    }

}
