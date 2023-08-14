package com.planty.api.gm.consulting.controller;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.gm.consulting.request.GmConsultingRecordRequest;
import com.planty.api.gm.consulting.service.GmConsultingService;
import com.planty.common.model.SessionTokenResponse;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/api/greenmates/consultings")
@RequiredArgsConstructor
@Api
public class GmConsultingController {

    private final GmConsultingService gmConsultingsService;

    // 담당 구독 전체 조회
    @GetMapping()
    public ResponseEntity<List<UserConsultingResponse>> findConsultingList(
            @RequestParam(value = "spid", required = false) Long spid
    ) {
        List<UserConsultingResponse> list = gmConsultingsService.findConsultingList(spid);
        if (list.size() == 0) { // 컨설팅 예약이 없는 경우
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<UserConsultingResponse>>(list, HttpStatus.OK);
    }

    // 컨설팅 세션 토큰 조회
    @GetMapping("/session/{cid}")
    public ResponseEntity<SessionTokenResponse> findSessionToken(@PathVariable Long cid) {
        String token = gmConsultingsService.findSessionToken(cid);
        if (token == null) { // 다른 gm이 채감
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        SessionTokenResponse tokenResponse = new SessionTokenResponse();
        tokenResponse.setToken(token);
        gmConsultingsService.setStartTime(cid);
        return new ResponseEntity<>(tokenResponse, HttpStatus.OK);
    }

    @PostMapping("/session/record")
    public ResponseEntity<?> deleteSession(@RequestBody GmConsultingRecordRequest recordInfo) {
        gmConsultingsService.deleteSession(recordInfo);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }



}
