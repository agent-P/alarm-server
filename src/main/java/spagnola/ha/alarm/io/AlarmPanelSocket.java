/**
 * 
 */
package spagnola.ha.alarm.io;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import spagnola.ha.alarm.properties.AlarmServerProperties;
import spagnola.ha.alarm.users.AlarmUsers;

/**
 * @author spagnola
 * @version 1.0
 * @since 2017-03-02
 *
 */
public class AlarmPanelSocket {

	private static Logger logger = LoggerFactory.getLogger(AlarmPanelSocket.class);

	private Socket alarmPanelSocket;

	private String alarmPanelHost;
	private int alarmPanelPort;

	private boolean connected = false;


	private BufferedReader in;
	private PrintWriter out;

	public AlarmPanelSocket(String alarmPanelHost, int alarmPanelPort) {

		this.alarmPanelHost = alarmPanelHost;
		this.alarmPanelPort = alarmPanelPort;

		createAlarmPanelSocket();
	}


	public void createAlarmPanelSocket() {
		try {
			logger.info("Creating alarm panel socket, host: " + alarmPanelHost + ", port: " + alarmPanelPort);
			alarmPanelSocket = new Socket(alarmPanelHost, alarmPanelPort);

			in = new BufferedReader(new InputStreamReader(alarmPanelSocket.getInputStream()));
			if(in == null) {
				logger.error("Failed to create BufferedReader for alarm panel socket.");
				connected = false;
			}
			else {
				connected = true;

				out = new PrintWriter(alarmPanelSocket.getOutputStream(), true);
				if(out == null) {
					logger.error("Failed to create PrintWriter for alarm panel socket.");
					connected = false;
				}
				else {
					connected = true;
				}
			}

		}
		catch(Exception exception) {
			logger.error("Failed to create alarm panel socket: " + exception.getMessage() + " for host: " + alarmPanelHost + " port: " + alarmPanelPort);
		}

	}



	public boolean isConnected() {
		return connected;
	}
	
	
	
	public void transmit(String command) {

		if(connected) {
			out.println(command);
		}
	}
	
	
	public String receive() {
		try {
			if(connected) {
				return in.readLine();
			}
			else {
				return "!socket read error";
			}
		} 
		catch(IOException exception) {
			logger.error("IO Exception on alarm panel socket read attempt: " + exception.getMessage());
			return "!socket read error";
		}
	}
    
}
