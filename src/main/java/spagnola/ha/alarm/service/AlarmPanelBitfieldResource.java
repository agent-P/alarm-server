package spagnola.ha.alarm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.ResourceSupport;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import spagnola.ha.alarm.io.AlarmPanel;

public class AlarmPanelBitfieldResource extends ResourceSupport {
	
	@JsonProperty("bit-field") private String bitField;
	
	@JsonProperty("ready") private String ready;
	@JsonProperty("armed-away") private String armedAway;
	@JsonProperty("armed-stay") private String armedStay;
	@JsonProperty("keypad-backlight") private String keypadBacklight;
	@JsonProperty("programming-mode") private String programmingMode;
	@JsonProperty("message-beeps") private String messageBeeps;
	@JsonProperty("zone-bypassed") private String zoneBypassed;
	@JsonProperty("ac-power") private String acPower;
	@JsonProperty("chime") private String chime;
	@JsonProperty("alarm-occurred") private String alarmOccurred;
	@JsonProperty("alarm-sounding") private String alarmSounding;
	@JsonProperty("battery") private String battery;
	@JsonProperty("entry-delay") private String entryDelay;
	@JsonProperty("system-issue") private String systemIssue;

	@Autowired
	AlarmPanel alarmPanel = new AlarmPanel();

	@JsonCreator
	public AlarmPanelBitfieldResource() {
		
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

}
