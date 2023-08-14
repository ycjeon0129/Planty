package com.planty.common.util;

import io.openvidu.java.client.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import io.openvidu.java.client.Connection;
//import io.openvidu.java.client.ConnectionProperties;
//import io.openvidu.java.client.OpenVidu;
//import io.openvidu.java.client.OpenViduHttpException;
//import io.openvidu.java.client.OpenViduJavaClientException;
//import io.openvidu.java.client.Session;
//import io.openvidu.java.client.SessionProperties;

//@RequestMapping("/api/sessions")
//@RestController
@Component
public class OpenViduUtil {

    @Value("${custom.openvidu.OPENVIDU_URL}")
    private String OPENVIDU_URL;

    @Value("${custom.openvidu.OPENVIDU_SECRET}")
    private String OPENVIDU_SECRET;

    private OpenVidu openvidu;

    @PostConstruct
    public void init() {
        this.openvidu = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);
    }

    /**
     * @return The Session ID
     */
    public String initializeSession(Map<String, Object> params) throws OpenViduJavaClientException, OpenViduHttpException {
        SessionProperties properties = SessionProperties.fromJson(params).build();
        Session session = openvidu.createSession(properties);
        return session.getSessionId();
    }

    /**
     * @return The Token associated to the Connection
     */
    public String createConnection(Map<String, Object> params)
            throws OpenViduJavaClientException, OpenViduHttpException {
        Session session = openvidu.getActiveSession( (String) params.get("sessionId"));
        if (session == null) {
            return null;
        }
        ConnectionProperties properties = ConnectionProperties.fromJson(params).build();
        Connection connection = session.createConnection(properties);
        return connection.getToken();
    }

}
