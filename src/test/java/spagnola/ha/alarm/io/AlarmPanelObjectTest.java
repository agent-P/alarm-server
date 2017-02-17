package spagnola.ha.alarm.io;

import static org.junit.Assert.*;

import org.junit.Test;

public class AlarmPanelObjectTest {
	
	AlarmPanel alarmPanel = new AlarmPanel();
	
	private static final String DISARMED_BITFIELD_1 = "1000000100000000----"; // Disarmed - backlight off
	private static final String DISARMED_BITFIELD_2 = "1001000100000000----"; // Disarmed - backlight on(note backlight stays on for 6 messages)
	private static final String DISARMED_BITFIELD_3 = "0000000100000000----"; // Disarmed - backlight off - fault(ready light off)
	private static final String DISARMED_BITFIELD_4 = "1001010100000000----"; // Disarmed - backlight on - beep once (test mode to disarmed/off)

	private static final String DISARMED_TEST_BITFIELD_4 = "0000030100000000----"; // Disarmed(test) - backlight off - fault(ready light off) - beep three times
	
	private static final String DISARMED_CHIME_BITFIELD_1 = "1001010110000000----"; // Disarmed(chime) - backlight on - beep once (enter chime mode)
	private static final String DISARMED_CHIME_BITFIELD_2 = "1000000110000000----"; // Disarmed(chime) - backlight off
	private static final String DISARMED_CHIME_BITFIELD_3 = "1000010110000000----"; // Disarmed(chime) - backlight off - beep once (chime mode reminder?)
	private static final String DISARMED_CHIME_BITFIELD_4 = "0000030110000000----"; // Disarmed(chime) - backlight off - entry door (ready light off) - beep three times
	
	private static final String ARMED_STAY_BITFIELD_1 = "0011030100000000----"; // Armed(stay-exiting-armed light on) - backlight on - (ready light off) - beep three times
	private static final String ARMED_STAY_BITFIELD_2 = "0011000100000000----"; // Armed(stay-exiting-armed light on) - backlight on - (ready light off)
	private static final String ARMED_STAY_BITFIELD_3 = "0010000100000000----"; // Armed(stay-exiting-armed light on) - backlight off - (ready light off)
	private static final String ARMED_STAY_BITFIELD_4 = "0010000100000000----"; // Armed(stay-armed light on) - backlight off - (ready light off)
	
	private static final String ARMED_AWAY_BITFIELD_1 = "0101020100000000----"; // Armed(away-exiting-armed light on) - backlight on - (ready light off) - beep two times
	private static final String ARMED_AWAY_BITFIELD_2 = "0101000100000000----"; // Armed(away-exiting-armed light on) - backlight on - (ready light off)
	private static final String ARMED_AWAY_BITFIELD_3 = "0100000100000000----"; // Armed(away-exiting-armed light on) - backlight off - (ready light off)
	private static final String ARMED_AWAY_BITFIELD_4 = "0100000100000000----"; // Armed(away-armed light on) - backlight off - (ready light off)
	
	private static final String ARMED_MAX_BITFIELD_1 = "0101020100001000----"; // Armed(max-exiting-armed light on) - backlight on - (ready light off) - beep two times
	private static final String ARMED_MAX_BITFIELD_2 = "0101000100001000----"; // Armed(max-exiting-armed light on) - backlight on - (ready light off)
	private static final String ARMED_MAX_BITFIELD_3 = "0100000100001000----"; // Armed(max-exiting-armed light on) - backlight off - (ready light off)
	private static final String ARMED_MAX_BITFIELD_4 = "0100000100001000----"; // Armed(max-armed light on) - backlight off - (ready light off)
	
	private static final String ARMED_INSTATNT_BITFIELD_1 = "0011030100001000----"; // Armed(instant-exiting-armed light on) - backlight on - (ready light off) - beep three times
	private static final String ARMED_INSTATNT_BITFIELD_2 = "0011000100001000----"; // Armed(instant-exiting-armed light on) - backlight on - (ready light off)
	private static final String ARMED_INSTATNT_BITFIELD_3 = "0010000100001000----"; // Armed(instant-exiting-armed light on) - backlight off - (ready light off)
	private static final String ARMED_INSTATNT_BITFIELD_4 = "0010000100001000----"; // Armed(instant-armed light on) - backlight off - (ready light off)
	

	@Test
	public void testDisarmedTest_4() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***TEST CASE 4 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(DISARMED_TEST_BITFIELD_4, numericCode, rawData, keypadText));
		assertEquals(DISARMED_TEST_BITFIELD_4, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.DISARMED_TEST, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(DISARMED_TEST_BITFIELD_4.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testDisarmedChime_1() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***CHIME CASE 1 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(DISARMED_CHIME_BITFIELD_1, numericCode, rawData, keypadText));
		assertEquals(DISARMED_CHIME_BITFIELD_1, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.DISARMED_CHIME, alarmPanel.getAlarmState());
		
		assertTrue(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(DISARMED_CHIME_BITFIELD_1.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertTrue(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testDisarmedChime_2() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***CHIME CASE 2 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(DISARMED_CHIME_BITFIELD_2, numericCode, rawData, keypadText));
		assertEquals(DISARMED_CHIME_BITFIELD_2, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.DISARMED_CHIME, alarmPanel.getAlarmState());
		
		assertTrue(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(DISARMED_CHIME_BITFIELD_2.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertTrue(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testDisarmedChime_3() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***CHIME CASE 3 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(DISARMED_CHIME_BITFIELD_3, numericCode, rawData, keypadText));
		assertEquals(DISARMED_CHIME_BITFIELD_3, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.DISARMED_CHIME, alarmPanel.getAlarmState());
		
		assertTrue(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(DISARMED_CHIME_BITFIELD_3.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertTrue(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testDisarmedChime_4() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***CHIME CASE 4 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(DISARMED_CHIME_BITFIELD_4, numericCode, rawData, keypadText));
		assertEquals(DISARMED_CHIME_BITFIELD_4, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.DISARMED_CHIME, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(DISARMED_CHIME_BITFIELD_4.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertTrue(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedStay_1() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***STAY CASE 1 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_STAY_BITFIELD_1, numericCode, rawData, keypadText));
		assertEquals(ARMED_STAY_BITFIELD_1, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_STAY, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertTrue(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_STAY_BITFIELD_1.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedStay_2() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***STAY CASE 2 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_STAY_BITFIELD_2, numericCode, rawData, keypadText));
		assertEquals(ARMED_STAY_BITFIELD_2, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_STAY, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertTrue(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_STAY_BITFIELD_2.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedStay_3() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***STAY CASE 3 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_STAY_BITFIELD_3, numericCode, rawData, keypadText));
		assertEquals(ARMED_STAY_BITFIELD_3, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_STAY, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertTrue(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_STAY_BITFIELD_3.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedStay_4() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***STAY CASE 4 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_STAY_BITFIELD_4, numericCode, rawData, keypadText));
		assertEquals(ARMED_STAY_BITFIELD_4, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_STAY, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertTrue(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_STAY_BITFIELD_4.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedAway_1() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***AWAY CASE 1 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_AWAY_BITFIELD_1, numericCode, rawData, keypadText));
		assertEquals(ARMED_AWAY_BITFIELD_1, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_AWAY, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertTrue(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_AWAY_BITFIELD_1.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedAway_2() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***AWAY CASE 2 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_AWAY_BITFIELD_2, numericCode, rawData, keypadText));
		assertEquals(ARMED_AWAY_BITFIELD_2, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_AWAY, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertTrue(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_AWAY_BITFIELD_2.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedAway_3() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***AWAY CASE 3 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_AWAY_BITFIELD_3, numericCode, rawData, keypadText));
		assertEquals(ARMED_AWAY_BITFIELD_3, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_AWAY, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertTrue(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_AWAY_BITFIELD_3.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedAway_4() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***AWAY CASE 4 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_AWAY_BITFIELD_4, numericCode, rawData, keypadText));
		assertEquals(ARMED_AWAY_BITFIELD_4, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_AWAY, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertTrue(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_AWAY_BITFIELD_4.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedMax_1() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***MAX CASE 1 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_MAX_BITFIELD_1, numericCode, rawData, keypadText));
		assertEquals(ARMED_MAX_BITFIELD_1, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_MAX, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertTrue(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_MAX_BITFIELD_1.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertTrue(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedMax_2() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***MAX CASE 2 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_MAX_BITFIELD_2, numericCode, rawData, keypadText));
		assertEquals(ARMED_MAX_BITFIELD_2, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_MAX, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertTrue(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_MAX_BITFIELD_2.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertTrue(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedMax_3() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***MAX CASE 3 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_MAX_BITFIELD_3, numericCode, rawData, keypadText));
		assertEquals(ARMED_MAX_BITFIELD_3, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_MAX, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertTrue(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_MAX_BITFIELD_3.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertTrue(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedMax_4() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***MAX CASE 4 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_MAX_BITFIELD_4, numericCode, rawData, keypadText));
		assertEquals(ARMED_MAX_BITFIELD_4, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_MAX, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertTrue(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_MAX_BITFIELD_4.charAt(5)), alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertTrue(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedInstant_1() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***INSTANT CASE 1 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_INSTATNT_BITFIELD_1, numericCode, rawData, keypadText));
		assertEquals(ARMED_INSTATNT_BITFIELD_1, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_INSTANT, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertTrue(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_INSTATNT_BITFIELD_1.charAt(5)) , alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertTrue(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedInstant_2() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***INSTANT CASE 2 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_INSTATNT_BITFIELD_2, numericCode, rawData, keypadText));
		assertEquals(ARMED_INSTATNT_BITFIELD_2, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_INSTANT, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertTrue(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_INSTATNT_BITFIELD_2.charAt(5)) , alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertTrue(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedInstant_3() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***INSTANT CASE 3 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_INSTATNT_BITFIELD_3, numericCode, rawData, keypadText));
		assertEquals(ARMED_INSTATNT_BITFIELD_3, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_INSTANT, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertTrue(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_INSTATNT_BITFIELD_3.charAt(5)) , alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertTrue(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testArmedInstant_4() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"ARMED ***INSTANT CASE 4 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(ARMED_INSTATNT_BITFIELD_4, numericCode, rawData, keypadText));
		assertEquals(ARMED_INSTATNT_BITFIELD_4, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.ARMED_INSTANT, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertTrue(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(ARMED_INSTATNT_BITFIELD_4.charAt(5)) , alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertTrue(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testDisarmed_1() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***CASE 1 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(DISARMED_BITFIELD_1, numericCode, rawData, keypadText));
		assertEquals(DISARMED_BITFIELD_1, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.DISARMED, alarmPanel.getAlarmState());
		
		assertTrue(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(DISARMED_BITFIELD_1.charAt(5)) , alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testDisarmed_2() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***CASE 2 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(DISARMED_BITFIELD_2, numericCode, rawData, keypadText));
		assertEquals(DISARMED_BITFIELD_2, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.DISARMED, alarmPanel.getAlarmState());
		
		assertTrue(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(DISARMED_BITFIELD_2.charAt(5)) , alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testDisarmed_3() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***CASE 3 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(DISARMED_BITFIELD_3, numericCode, rawData, keypadText));
		assertEquals(DISARMED_BITFIELD_3, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.DISARMED, alarmPanel.getAlarmState());
		
		assertFalse(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertFalse(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(DISARMED_BITFIELD_3.charAt(5)) , alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testDisarmed_4() {
		
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***CASE 4 TEST MESSAGE***\"";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(DISARMED_BITFIELD_4, numericCode, rawData, keypadText));
		assertEquals(DISARMED_BITFIELD_4, alarmPanel.getBitField());
		assertEquals(numericCode, alarmPanel.getNumericCode());
		assertEquals(rawData, alarmPanel.getRawData());
		assertEquals(keypadText, alarmPanel.getKeypadText());
		
		assertEquals(AlarmPanel.DISARMED_TEST, alarmPanel.getAlarmState());
		
		assertTrue(alarmPanel.isReady());
		assertFalse(alarmPanel.isArmedAway());
		assertFalse(alarmPanel.isArmedStay());
		assertTrue(alarmPanel.isBacklightOn());
		assertFalse(alarmPanel.isInProgrammingMode());
		assertEquals(Character.getNumericValue(DISARMED_BITFIELD_4.charAt(5)) , alarmPanel.numberOfBeepsForMessage());
		assertFalse(alarmPanel.isZoneBypassed());
		assertTrue(alarmPanel.isOnACPower());
		assertFalse(alarmPanel.isChimeEnabled());
		assertFalse(alarmPanel.hasAlarmOccured());
		assertFalse(alarmPanel.isAlarmSounding());
		assertFalse(alarmPanel.isBatteryLow());
		assertFalse(alarmPanel.isEntryDelayOff());
		assertFalse(alarmPanel.isAlarmFire());
		assertFalse(alarmPanel.hasSystemIssue());
		assertFalse(alarmPanel.isArmedPerimeterOnly());
		assertFalse(alarmPanel.isErrorReportSystemSpecific());
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	
	@Test
	public void testProgrammingMode() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***PROG MODE TEST MESSAGE***\"";
		
		String notInProgrammingMode = "0000000000000000----";
		String inProgrammingMode = "0000100000000000----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notInProgrammingMode, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isInProgrammingMode());

		alarmPanel.setKeypadMessage(buildKeypadMessage(inProgrammingMode, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isInProgrammingMode());
	}
	
	@Test
	public void testNumberOfBeeps() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***NUM OF BEEPS TEST MESSAGE***\"";
		
		StringBuilder numberOfBeeps = new StringBuilder("0000000000000000----");
		
		for(int i=0; i<8; i++) {
			
			numberOfBeeps.setCharAt(5, Integer.toString(i).charAt(0));
			alarmPanel.setKeypadMessage(buildKeypadMessage(numberOfBeeps.toString(), numericCode, rawData, keypadText));		
			assertEquals(Character.getNumericValue(numberOfBeeps.toString().charAt(5)) , alarmPanel.numberOfBeepsForMessage());
			//System.out.println("number of beeps: " + Integer.toString(alarmPanel.numberOfBeepsForMessage()));
		}

	}
	
	@Test
	public void testZoneBypassed() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String notBypassed = "0000000000000000----";
		String bypassed = "0000001000000000----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notBypassed, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isZoneBypassed());

		alarmPanel.setKeypadMessage(buildKeypadMessage(bypassed, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isZoneBypassed());
	}
	
	@Test
	public void testOnAC() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String notOnAC = "0000000000000000----";
		String onAC = "0000000100000000----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notOnAC, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isOnACPower());

		alarmPanel.setKeypadMessage(buildKeypadMessage(onAC, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isOnACPower());
	}
	
	@Test
	public void testAlarmOccurred() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String notOccurred = "0000000000000000----";
		String occurred = "0000000001000000----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notOccurred, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.hasAlarmOccured());

		alarmPanel.setKeypadMessage(buildKeypadMessage(occurred, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.hasAlarmOccured());
	}
	
	@Test
	public void testAlarmSounding() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String notSounding = "0000000000000000----";
		String sounding = "0000000000100000----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notSounding, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isAlarmSounding());

		alarmPanel.setKeypadMessage(buildKeypadMessage(sounding, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isAlarmSounding());
	}
	
	@Test
	public void testBatteryLow() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String notLow = "0000000000000000----";
		String low = "0000000000010000----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notLow, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isBatteryLow());

		alarmPanel.setKeypadMessage(buildKeypadMessage(low, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isBatteryLow());
	}
	
	@Test
	public void testEntryDelay() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String delay = "0000000000000000----";
		String noDelay = "0000000000001000----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(delay, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isEntryDelayOff());

		alarmPanel.setKeypadMessage(buildKeypadMessage(noDelay, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isEntryDelayOff());
	}
	
	@Test
	public void testFireAlarm() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String noFire = "0000000000000000----";
		String fire = "0000000000000100----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(noFire, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isAlarmFire());

		alarmPanel.setKeypadMessage(buildKeypadMessage(fire, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isAlarmFire());
	}
	
	@Test
	public void testSystemIssue() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String notSystemIssue = "0000000000000000----";
		String systemIssue = "0000000000000010----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notSystemIssue, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.hasSystemIssue());

		alarmPanel.setKeypadMessage(buildKeypadMessage(systemIssue, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.hasSystemIssue());
	}
	
	@Test
	public void testWatchingPerimeter() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String notOnlyPerimeter = "0000000000000000----";
		String onlyPerimeter = "0000000000000001----";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notOnlyPerimeter, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isArmedPerimeterOnly());

		alarmPanel.setKeypadMessage(buildKeypadMessage(onlyPerimeter, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isArmedPerimeterOnly());
	}
	
	@Test
	public void testErrorReport() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String notSystemSpecific = "00000000000000000---";
		String systemSpecific = "00000000000000001---";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notSystemSpecific, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isErrorReportSystemSpecific());

		alarmPanel.setKeypadMessage(buildKeypadMessage(systemSpecific, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isErrorReportSystemSpecific());
	}
	
	@Test
	public void testAdemcoModeAorD() {
		String numericCode = "010";
		String rawData = "f70700000010808c18020000000000";
		String keypadText = "\"DISARMED ***ZONE BYPASSED TEST MESSAGE***\"";
		
		String notModeAorD = "000000000000000000--";
		String modeAorD = "000000000000000001--";
		
		alarmPanel.setKeypadMessage(buildKeypadMessage(notModeAorD, numericCode, rawData, keypadText));		
		assertFalse(alarmPanel.isAdemcoDSCModeAorD());

		alarmPanel.setKeypadMessage(buildKeypadMessage(modeAorD, numericCode, rawData, keypadText));		
		assertTrue(alarmPanel.isAdemcoDSCModeAorD());
	}
	
	private String buildKeypadMessage(String bitField, String numericCode, String rawData, String textMessage) {
		StringBuilder keypadMessage = new StringBuilder();
		
		keypadMessage.append("[");
		keypadMessage.append(bitField);
		keypadMessage.append("],");
		keypadMessage.append(numericCode);
		keypadMessage.append(",[");
		keypadMessage.append(rawData);
		keypadMessage.append("],");
		keypadMessage.append(textMessage);
		
		return keypadMessage.toString();
	}

}
