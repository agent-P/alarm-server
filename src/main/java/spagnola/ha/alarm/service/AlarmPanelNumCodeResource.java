package spagnola.ha.alarm.service;

import org.springframework.hateoas.ResourceSupport;

import spagnola.ha.alarm.io.AlarmPanel;

public class AlarmPanelNumCodeResource extends ResourceSupport {
	private String numericCode;

	public AlarmPanelNumCodeResource(AlarmPanel alarmPanel) {

		numericCode = alarmPanel.getNumericCode();
	}


	public String getNumericCode() {
		return numericCode;
	}
}
