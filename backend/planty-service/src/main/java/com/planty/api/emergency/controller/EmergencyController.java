package com.planty.api.emergency.controller;

import com.planty.api.emergency.request.EmergencyConnectionRequest;
import com.planty.api.emergency.response.ConnectionCountResponse;
import com.planty.api.emergency.response.EmergencyResponse;
import com.planty.api.emergency.response.EmergencySessionResponse;
import com.planty.api.emergency.service.EmergencyService;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;

@RestController
@Slf4j
@RequestMapping("/api/emergencies")
@RequiredArgsConstructor
@Api
public class EmergencyController {

    private final EmergencyService emergencyService;

    // 응급실 이용 내역 전체 조회
    @GetMapping()
    public ResponseEntity<List<EmergencyResponse>> findEmergencyList() throws ParseException {
        List<EmergencyResponse> list = emergencyService.findEmergencyList();
        if (list.isEmpty()) { // 응급실 이용 내역이 없는 경우
            return ResponseEntity.noContent().build();
        }
//        return ResponseEntity.ok().body(list);
        return new ResponseEntity<List<EmergencyResponse>>(list, HttpStatus.OK);
    }

//    // 담당 구독 상세 조회
//    @GetMapping("/{spid}")
//    public ResponseEntity<GmSubscribeDetailResponse> findSubscribeDetail(@PathVariable Long spid) {
//        GmSubscribeDetailResponse subsInfo = gmSubscribeService.findSubscribeDetail(spid);
//        if (subsInfo == null) { // spid 가 유효하지만 담당 그린메이트가 아닐 경우
//            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<GmSubscribeDetailResponse>(subsInfo, HttpStatus.OK);
//    }

    @GetMapping("/greenmates-connection")
    public ResponseEntity<?> getGmCnt(){
        log.info(logCurrent(getClassName(), getMethodName(), START));
        ConnectionCountResponse cnt = emergencyService.getGmCnt();
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(200).body(cnt);
    }

    @PostMapping("/{type}")
    public ResponseEntity<EmergencySessionResponse> initializeSession(@PathVariable("type") int type) throws OpenViduJavaClientException, OpenViduHttpException {
        EmergencySessionResponse sessionInfo = emergencyService.initializeSession(type);

        return new ResponseEntity<EmergencySessionResponse>(sessionInfo, HttpStatus.OK);
    }

    @PostMapping("/connections")
    public ResponseEntity<String> createConnection(@RequestBody EmergencyConnectionRequest connectionInfo)
            throws OpenViduJavaClientException, OpenViduHttpException {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String token = emergencyService.createConnection(connectionInfo);
        log.info(logCurrent(getClassName(), getMethodName(), END));

        return new ResponseEntity<>(token, HttpStatus.OK);
    }

}
