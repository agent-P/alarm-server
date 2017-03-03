package spagnola.ha.alarm.service;

import org.springframework.hateoas.ResourceSupport;

import spagnola.ha.alarm.io.AlarmPanel;

public class AlarmPanelBitfieldResource extends ResourceSupport {
	
	private String bitField;
	
	private String ready;
	private String armedAway;
	private String armedStay;
	private String keypadBacklight;
	private String programmingMode;
	private String messageBeeps;
	private String zoneBypassed;
	private String acPower;
	private String chime;
	private String alarmOccurred;
	private String alarmSounding;
	private String battery;
	private String entryDelay;
	private String systemIssue;



	public AlarmPanelBitfieldResource(AlarmPanel alarmPanel) {
		
		bitField = alarmPanel.getBitField();
		
		ready = String.valueOf(alarmPanel.isReady());
		armedAway = String.valueOf(alarmPanel.isArmedAway());
		armedStay = String.valueOf(alarmPanel.isArmedStay());
		keypadBacklight = alarmPanel.isBacklightOn() ? "on" : "off";
		programmingMode = String.valueOf(alarmPanel.isInProgrammingMode());
		messageBeeps = Integer.toString(alarmPanel.numberOfBeepsForMessage());
		zoneBypassed = String.valueOf(alarmPanel.isZoneBypassed());
		acPower = alarmPanel.isOnACPower() ? "on" : "off";
		chime = alarmPanel.isChimeEnabled() ? "enabled" : "disabled";
		alarmOccurred = String.valueOf(alarmPanel.hasAlarmOccured());
		alarmSounding = String.valueOf(alarmPanel.isAlarmSounding());
		battery = alarmPanel.isBatteryLow() ? "low" : "ok";
		entryDelay = alarmPanel.isEntryDelayOff() ? "off" : "on";
		systemIssue = String.valueOf(alarmPanel.hasSystemIssue());
	}


	public String getBitField() {
		return bitField;
	}

	public String getReady() {
		return ready;
	}

	public String getArmedAway() {
		return armedAway;
	}

	public String getArmedStay() {
		return armedStay;
	}

	public String getKeypadBacklight() {
		return keypadBacklight;
	}

	public String getProgrammingMode() {
		return programmingMode;
	}

	public String getMessageBeeps() {
		return messageBeeps;
	}

	public String getZoneBypassed() {
		return zoneBypassed;
	}

	public String getAcPower() {
		return acPower;
	}

	public String getChime() {
		return chime;
	}

	public String getAlarmOccurred() {
		return alarmOccurred;
	}

	public String getAlarmSounding() {
		return alarmSounding;
	}

	public String getBattery() {
		return battery;
	}

	public String getEntryDelay() {
		return entryDelay;
	}

	public String getSystemIssue() {
		return systemIssue;
	}
}
