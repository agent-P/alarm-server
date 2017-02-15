/**
 * 
 */
package spagnola.ha.alarm.users;

/**
 * @author spagnola
 *
 */
public class AlarmUser {

	private String name;
	private String ipAddress;
	private String pin;
	
	public AlarmUser() {
		setName("");
		setIpAddress("");
		setPin(null);
	}
	
	public AlarmUser(String ipAddress) {
		setName("");
		setIpAddress(ipAddress);
		setPin(null);
	}
	
	public AlarmUser(String name, String ipAddress, String pin) {
		setName(name);
		setIpAddress(ipAddress);
		setPin(pin);
	}
	
	
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the ipAddress
	 */
	public String getIpAddress() {
		return ipAddress;
	}

	/**
	 * @param ipAddress the ipAddress to set
	 */
	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	/**
	 * @return the pin
	 */
	public String getPin() {
		return pin;
	}

	/**
	 * @param pin the pin to set
	 */
	public void setPin(String pin) {
		this.pin = pin;
	}
	
}
