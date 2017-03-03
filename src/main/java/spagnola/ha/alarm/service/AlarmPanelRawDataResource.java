package spagnola.ha.alarm.service;

import org.springframework.hateoas.ResourceSupport;

import spagnola.ha.alarm.io.AlarmPanel;

public class AlarmPanelRawDataResource extends ResourceSupport {
	private String rawData;

	public AlarmPanelRawDataResource(AlarmPanel alarmPanel) {

		rawData = alarmPanel.getRawData();
	}

	public String getRawData() {
		return rawData;
	}
}