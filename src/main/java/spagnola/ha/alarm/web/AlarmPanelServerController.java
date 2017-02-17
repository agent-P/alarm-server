/**
 * 
 */
package spagnola.ha.alarm.web;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.*;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import spagnola.ha.alarm.service.AlarmPanelBitfieldResource;
import spagnola.ha.alarm.service.AlarmPanelKeypadTextResource;
import spagnola.ha.alarm.service.AlarmPanelNumCodeResource;
import spagnola.ha.alarm.service.AlarmPanelRawDataResource;
import spagnola.ha.alarm.service.AlarmPanelStateResource;


/**
 * @author spagnola
 *
 */
@RestController
public class AlarmPanelServerController {

    @RequestMapping(path="/state", method=RequestMethod.GET)
    public HttpEntity<AlarmPanelStateResource> alarmPanelStateResource() {

    	AlarmPanelStateResource alarmPanelStateResource = new AlarmPanelStateResource();
    	alarmPanelStateResource.add(linkTo(methodOn(AlarmPanelServerController.class).alarmPanelStateResource()).withSelfRel());
    	
    	alarmPanelStateResource.add(linkTo(methodOn(AlarmPanelServerController.class).alarmPanelBitfieldResource()).withRel("bit-field"));
    	alarmPanelStateResource.add(linkTo(methodOn(AlarmPanelServerController.class).alarmPanelRawDataResource()).withRel("raw-data"));
    	alarmPanelStateResource.add(linkTo(methodOn(AlarmPanelServerController.class).alarmPanelKeypadTextResource()).withRel("keypad-text"));
    	alarmPanelStateResource.add(linkTo(methodOn(AlarmPanelServerController.class).alarmPanelNumCodeResource()).withRel("numeric-code"));

        return new ResponseEntity<AlarmPanelStateResource>(alarmPanelStateResource, HttpStatus.OK);
    }
        
    @RequestMapping(path="/bit-field", method=RequestMethod.GET)
    public HttpEntity<AlarmPanelBitfieldResource> alarmPanelBitfieldResource() {

    	AlarmPanelBitfieldResource alarmPanelBitfieldResource = new AlarmPanelBitfieldResource();
    	alarmPanelBitfieldResource.add(linkTo(methodOn(AlarmPanelServerController.class).alarmPanelBitfieldResource()).withSelfRel());

        return new ResponseEntity<AlarmPanelBitfieldResource>(alarmPanelBitfieldResource, HttpStatus.OK);
    }
        
    @RequestMapping(path="/raw-data", method=RequestMethod.GET)
    public HttpEntity<AlarmPanelRawDataResource> alarmPanelRawDataResource() {

    	AlarmPanelRawDataResource alarmPanelRawDataResource = new AlarmPanelRawDataResource();
    	alarmPanelRawDataResource.add(linkTo(methodOn(AlarmPanelServerController.class).alarmPanelRawDataResource()).withSelfRel());

        return new ResponseEntity<AlarmPanelRawDataResource>(alarmPanelRawDataResource, HttpStatus.OK);
    }
        
    @RequestMapping(path="/keypad-text", method=RequestMethod.GET)
    public HttpEntity<AlarmPanelKeypadTextResource> alarmPanelKeypadTextResource() {

    	AlarmPanelKeypadTextResource alarmPanelKeypadTextResource = new AlarmPanelKeypadTextResource();
    	alarmPanelKeypadTextResource.add(linkTo(methodOn(AlarmPanelServerController.class).alarmPanelKeypadTextResource()).withSelfRel());

        return new ResponseEntity<AlarmPanelKeypadTextResource>(alarmPanelKeypadTextResource, HttpStatus.OK);
    }
        
    @RequestMapping(path="/numeric-code", method=RequestMethod.GET)
    public HttpEntity<AlarmPanelNumCodeResource> alarmPanelNumCodeResource() {

    	AlarmPanelNumCodeResource alarmPanelNumCodeResource = new AlarmPanelNumCodeResource();
    	alarmPanelNumCodeResource.add(linkTo(methodOn(AlarmPanelServerController.class).alarmPanelNumCodeResource()).withSelfRel());

        return new ResponseEntity<AlarmPanelNumCodeResource>(alarmPanelNumCodeResource, HttpStatus.OK);
    }
        
}
