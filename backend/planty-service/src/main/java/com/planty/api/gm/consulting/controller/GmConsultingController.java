package com.planty.api.gm.consulting.controller;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.gm.consulting.service.GmConsultingService;
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
    public ResponseEntity<String> findSessionToken(@PathVariable Long cid) {
        String token = gmConsultingsService.findSessionToken(cid);
        if (token == null) { // 아직 생성된 세션이 없는 경우
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        gmConsultingsService.setStartTime(cid);
        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @DeleteMapping("/session/{cid}")
    public ResponseEntity<?> deleteSession(@PathVariable Long cid) {
        gmConsultingsService.deleteSession(cid);

        return new ResponseEntity<>(null, HttpStatus.OK);
    }



}
