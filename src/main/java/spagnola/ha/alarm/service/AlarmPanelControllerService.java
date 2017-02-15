/**
 * 
 */
package spagnola.ha.alarm.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * @author spagnola
 *
 */
@Service
public class AlarmPanelControllerService {
	private static Logger logger = LoggerFactory.getLogger(AlarmPanelControllerService.class);
	
	
	public String getAlarmStatus() {
		logger.info("Get Alarm status...");
		// TODO - add code that actually gets the alarm status.
		return "Alarm Status";
	}

	public String sendAlarmCommand(String command) {
		logger.info("Snd Alarm command...");
		// TODO - add code that actually sends an alarm command.
		return "Alarm command: " + command + " sent...";
	}


}
