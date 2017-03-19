package spagnola.ha.alarm.web;


import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.context.request.async.DeferredResult;

import java.util.Collections;
import java.util.Map;
import java.util.Map.Entry;
import java.util.concurrent.ConcurrentHashMap;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Observable;
import java.util.Observer;

import spagnola.ha.alarm.io.AlarmPanel;

import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * @author spagnola
 * @version 1.0
 * @since 2017-03-10
 *
 */
@RestController
@RequestMapping("/alarm-keypad")
public class AlarmKeypadController  implements Observer {
    private static Logger logger = LoggerFactory.getLogger(AlarmKeypadController.class);

    private final Map<DeferredResult<String>, Integer> statusRequests =	new ConcurrentHashMap<DeferredResult<String>, Integer>();

    AlarmPanel alarmPanel;

    public AlarmKeypadController(AlarmPanel alarmPanel) {
        this.alarmPanel = alarmPanel;

        this.alarmPanel.addObserver(this);
    }

    @RequestMapping(method=RequestMethod.GET)
    @ResponseBody
    public DeferredResult<String> getKeypadMessage(HttpServletRequest request, HttpServletResponse response, @RequestParam String requestType) {

        final DeferredResult<String> deferredResult = new DeferredResult<String>(null, Collections.emptyList());

        JSONObject result = new JSONObject();

       if(alarmPanel.isAllowed(request.getRemoteAddr())) {
           if(requestType.equals("connect")) {
               result.put("type", "authentication-message");
               result.put(requestType, "authorized");
               if(alarmPanel.hasPIN(request.getRemoteAddr())) {
                   result.put("pin", "yes");
               }
               else {
                   result.put("pin", "no");
               }
               response.setContentType("application/json");
               deferredResult.setResult(result.toString());
           }
           else if(requestType.equals("receive")) {
               this.statusRequests.put(deferredResult, 0);
               response.setContentType("application/json");
           }
           else {
               String errorString = "Request type: [" + requestType + "] not recognized.";
               logger.warn(errorString);
               deferredResult.setErrorResult(errorString);
               response.setStatus(HttpServletResponse.SC_NOT_FOUND);
           }
        }
        else {
            String errorString = "Device: [" + request.getRemoteAddr() + "] not authorized.";
            logger.warn(errorString);
            deferredResult.setErrorResult(errorString);
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        }

        deferredResult.onCompletion(new Runnable() {
            @Override
            public void run() {
                logger.debug("removing deferredResult..." );
                statusRequests.remove(deferredResult);
            }
        });

        return deferredResult;
    }


    @RequestMapping(method=RequestMethod.POST)
    @ResponseBody
    public void postMessage(@RequestBody String message) {

        JSONObject jsonObject = new JSONObject(message);
        logger.debug("POST: " + jsonObject.toString());

    }


    @Override
    public void update(Observable observable, Object object) {
        logger.debug("Observer notified...");

        JSONObject jsonObject = (JSONObject)object;
        logger.debug("object: " + jsonObject.toString());

        String type = jsonObject.getString("type");

        if(type.equals("key-pad-message")) {
            for (Entry<DeferredResult<String>, Integer> entry : this.statusRequests.entrySet()) {
                entry.getKey().setResult(jsonObject.toString());
            }
        }
    }

}