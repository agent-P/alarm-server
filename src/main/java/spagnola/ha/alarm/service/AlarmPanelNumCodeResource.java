package spagnola.ha.alarm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.ResourceSupport;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import spagnola.ha.alarm.io.AlarmPanel;

public class AlarmPanelNumCodeResource extends ResourceSupport {
	@JsonProperty("numeric-code") private String numericCode;

	@Autowired
	AlarmPanel alarmPanel = new AlarmPanel();

	@JsonCreator
	public AlarmPanelNumCodeResource() {
		numericCode = alarmPanel.getNumericCode();
	}

}
