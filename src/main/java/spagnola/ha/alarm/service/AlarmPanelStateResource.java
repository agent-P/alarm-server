package spagnola.ha.alarm.service;

import org.springframework.hateoas.ResourceSupport;

import spagnola.ha.alarm.io.AlarmPanel;

public class AlarmPanelStateResource extends ResourceSupport {
	
    
    private String state;


    public AlarmPanelStateResource(AlarmPanel alarmPanel) {

        state = alarmPanel.getAlarmStateString();
    }

    public String getState() {
        return state;
    }

}
