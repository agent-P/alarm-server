/**
 * 
 */
package spagnola.ha.alarm.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import spagnola.ha.alarm.service.AlarmPanelControllerService;


/**
 * @author spagnola
 *
 */
@RestController
public class AlarmPanelServerController {
    @Autowired
    private AlarmPanelControllerService alarmPanelControllerService;
    
    @RequestMapping("/alarm/status")
    public String alarmPanelStatus() {
        return this.alarmPanelControllerService.getAlarmStatus();
    }
    
    @RequestMapping("/alarm/command/{command}")
    public String alarmPanelCommand(@PathVariable final String command) {
        return this.alarmPanelControllerService.sendAlarmCommand(command);
    }
        
}
