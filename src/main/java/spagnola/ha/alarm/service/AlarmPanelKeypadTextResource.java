package spagnola.ha.alarm.service;

import org.springframework.hateoas.ResourceSupport;

import spagnola.ha.alarm.io.AlarmPanel;

public class AlarmPanelKeypadTextResource extends ResourceSupport {
	private String keypadText;


	public AlarmPanelKeypadTextResource(AlarmPanel alarmPanel) {

		keypadText = alarmPanel.getKeypadText();
	}


	public String getKeypadText() {
		return keypadText;
	}
}
