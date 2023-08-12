package com.planty.api.emergency.controller;

import com.planty.api.emergency.response.EmergencyResponse;
import com.planty.api.emergency.service.EmergencyService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;

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

}
