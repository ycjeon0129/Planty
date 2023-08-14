package com.planty.api.consulting.controller;

import com.planty.api.consulting.request.ConsultingConnectionRequest;
import com.planty.api.consulting.request.ConsultingSessionRequest;
import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.consulting.service.ConsultingService;
import com.planty.common.model.SessionTokenResponse;
import io.openvidu.java.client.*;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;

@RestController
@Slf4j
@RequestMapping("/api/consultings")
@RequiredArgsConstructor
@Api
public class ConsultingController {
    private final ConsultingService consultingServiceImpl;
    @GetMapping
    public ResponseEntity<?> getUserConsultingList() {

        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<UserConsultingResponse> consultingList = consultingServiceImpl.getUserConsultingUid();

        if (!consultingList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(consultingList);
//            return ResponseEntity.ok().body(consultingList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();
//        return ResponseEntity.noContent().build();

    }

    @GetMapping("/{sid}")
    public ResponseEntity<?> getUserConsultingDetailList(@PathVariable("sid") Long sid) {

        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<UserConsultingResponse> consultingDetailList = consultingServiceImpl.getUserConsultingDetail(sid);

        if (!consultingDetailList.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(consultingDetailList);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(204).build();

    }

    @PostMapping()
    public ResponseEntity<String> initializeSession(@RequestBody ConsultingSessionRequest sessionInfo) throws OpenViduJavaClientException, OpenViduHttpException {
        String sessionId = consultingServiceImpl.initializeSession(sessionInfo.getCid());

        return new ResponseEntity<>(sessionId, HttpStatus.OK);
    }

    @PostMapping("/connections")
    public ResponseEntity<SessionTokenResponse> createConnection(@RequestBody ConsultingConnectionRequest connectionInfo)
            throws OpenViduJavaClientException, OpenViduHttpException {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String token = consultingServiceImpl.createConnection(connectionInfo);
        SessionTokenResponse tokenResponse = new SessionTokenResponse();
        tokenResponse.setToken(token);
        log.info(logCurrent(getClassName(), getMethodName(), END));

        return new ResponseEntity<>(tokenResponse, HttpStatus.OK);
    }
}
