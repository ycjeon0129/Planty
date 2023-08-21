package com.planty.api.gm.account.controller;

import com.planty.api.booking.response.BookingResponse;
import com.planty.api.gm.account.request.GmJoinRequest;
import com.planty.api.gm.account.response.GmAccountResponse;
import com.planty.api.gm.account.response.GmLoginResponse;
import com.planty.api.gm.account.response.GmWebRTCResponse;
import com.planty.api.gm.account.service.GmAccountService;
import com.planty.api.gm.booking.response.GmBookingResponse;
import com.planty.api.gm.booking.service.GmBookingService;
import com.planty.common.auth.PrincipalDetails;
import com.planty.common.enums.Role;
import com.planty.db.entity.GmInfo;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;
@RestController
@Slf4j
@RequestMapping("/api/greenmates")
@RequiredArgsConstructor
@Api
public class GmAccountController {
    private final GmAccountService gmAccountService;

//    @PostMapping("/join")
//    public ResponseEntity<?> join(@RequestBody GmJoinRequest gmJoinInfo){
//        gmAccountService.join(gmJoinInfo);
//
//        return ResponseEntity.status(200).build();
//    }

//    @PostMapping("/login")
//    @ResponseBody
//    public ResponseEntity<?> login(Authentication authentication, @AuthenticationPrincipal PrincipalDetails principalDetails){
//
////        GmLoginResponse gmLoginInfo = gmAccountService.login(authentication, principalDetails);
//
//        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
//        GmInfo gm = principal.getGm();
//        GmLoginResponse loginInfo = GmLoginResponse.builder()
//                .gid(gm.getGid())
//                .id(gm.getId())
//                .nickname(gm.getNickname())
//                .introduce(gm.getIntroduce())
//                .build();
//
//        return ResponseEntity.status(200).body(loginInfo);
//    }

    @GetMapping ("/active") // GM 활성화 상태 조회
    public ResponseEntity<?> getGmActive() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        GmAccountResponse gmAccountResponse = gmAccountService.getGmActive();

        if (gmAccountResponse != null) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(gmAccountResponse);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(404).build();
    }

    @PostMapping("/active") // GM 활성화 상태 변경
    public ResponseEntity<?> updateGmActive() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        GmAccountResponse gmAccountResponse = gmAccountService.updateGmActive();

        if (gmAccountResponse != null) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return ResponseEntity.status(200).body(gmAccountResponse);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return ResponseEntity.status(404).build();
    }

    @GetMapping("/refresh-request")
    public ResponseEntity<List<GmWebRTCResponse>> findRequest() throws ParseException {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        List<GmWebRTCResponse> list = gmAccountService.findRequest();
        if (list.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return new ResponseEntity<List<GmWebRTCResponse>>(list, HttpStatus.OK);
    }

}