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

//    // 담당 구독 상세 조회
//    @GetMapping("/{spid}")
//    public ResponseEntity<GmSubscribeDetailResponse> findSubscribeDetail(@PathVariable Long spid) {
//        GmSubscribeDetailResponse subsInfo = gmSubscribeService.findSubscribeDetail(spid);
//        if (subsInfo == null) { // spid 가 유효하지만 담당 그린메이트가 아닐 경우
//            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
//        }
//        return new ResponseEntity<GmSubscribeDetailResponse>(subsInfo, HttpStatus.OK);
//    }

//    // 구독 사용자 전체 조회
//    @GetMapping("/{spid}/users")
//    public ResponseEntity<?> findSubscriberList() {
//        return null;
//    }
//
//    // 구독 사용자 상세 조회
//    @GetMapping("/{spid}/users/{uid}")
//    public ResponseEntity<?> findSubscriberDetail() {
//        return null;
//    }


}
