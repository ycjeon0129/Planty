package com.planty.api.gm.account.service;

import com.planty.api.gm.account.request.GmJoinRequest;
import com.planty.api.gm.account.response.GmAccountResponse;
import com.planty.api.gm.account.response.GmLoginResponse;
import com.planty.api.gm.account.response.GmWebRTCResponse;
import com.planty.api.subscribe.request.UserSubscribeRequest;
import com.planty.api.subscribe.service.SubscribeService;
import com.planty.api.ticketProduct.response.TicketProductResponse;
import com.planty.common.auth.PrincipalDetails;
import com.planty.common.enums.Role;
import com.planty.common.exception.handler.CustomException;
import com.planty.common.util.SecurityUtil;
import com.planty.common.util.TimeUtil;
import com.planty.db.entity.*;
import com.planty.db.repository.ConsultingBookingRepository;
import com.planty.db.repository.EmergencyLogRepository;
import com.planty.db.repository.GmInfoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import static com.planty.common.exception.handler.ErrorCode.*;
import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;

@Slf4j
@Service
@RequiredArgsConstructor
public class GmAccountServiceImpl implements GmAccountService {

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private final GmInfoRepository gmInfoRepository;
    private final ConsultingBookingRepository consultingBookingRepository;
    private final EmergencyLogRepository emergencyLogRepository;

    @Override
    public void join(GmJoinRequest gmJoinInfo) {

//        String encodePwd = bCryptPasswordEncoder.encode(gmJoinInfo.getPw());
//        GmInfo gmInfo = GmInfo.builder()
//                .id(gmJoinInfo.getId())
//                .pw(encodePwd)
//                .nickname(gmJoinInfo.getNickname())
//                .introduce(gmJoinInfo.getIntroduce())
//                .role(Role.ROLE_GM)
//                .build();
//
//        gmInfoRepository.save(gmInfo);  //반드시 패스워드 암호화해야함
    }

    @Override
    public GmLoginResponse login(Authentication authentication, PrincipalDetails principalDetails) {
//        PrincipalDetails principal = (PrincipalDetails) authentication.getPrincipal();
//        GmInfo gm = principal.getGm();
//        GmLoginResponse loginInfo = GmLoginResponse.builder()
//                .gid(gm.getGid())
//                .id(gm.getId())
//                .nickname(gm.getNickname())
//                .introduce(gm.getIntroduce())
//                .build();
//        return loginInfo;
        return null;
    }

    @Override // 이용권 묶음상품 상품 조회
    public GmAccountResponse getGmActive() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gm = gmInfoRepository.findByGid(gid)
                .orElseThrow(() -> new CustomException(GM_NOT_FOUND));
        GmAccountResponse gmAccountResponse = GmAccountResponse.builder()
                .active(gm.getActivate())
                .build();
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return gmAccountResponse;
    }

    @Override
    public GmAccountResponse updateGmActive() {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gm = gmInfoRepository.findByGid(gid)
                .orElseThrow(() -> new CustomException(GM_NOT_FOUND));

        gm.setActivate(!gm.getActivate());
        gmInfoRepository.save(gm);

        GmAccountResponse gmAccountResponse = GmAccountResponse.builder()
                .active(gm.getActivate())
                .build();

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return gmAccountResponse;
    }

    @Override
    public List<GmWebRTCResponse> findRequest() throws ParseException {
        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gmInfo = gmInfoRepository.findByGid(gid)
                .orElseThrow(() -> new CustomException(GM_NOT_FOUND));
        List<ConsultingBooking> consultingBookingList = consultingBookingRepository.findByGidAndConnectionNotNullAndActiveFalse(gmInfo);
        List<EmergencyLog> emergencyLogList = emergencyLogRepository.findByConnectionNotNullAndGidIsNull();
        List<GmWebRTCResponse> list = new ArrayList<>();
        for (ConsultingBooking consulting : consultingBookingList) {
            list.add(GmWebRTCResponse.builder()
                    .webRTCType(0)
                    .idx(consulting.getCid())
                    .username(consulting.getUid().getUsername())
                    .build());
        }
        for (EmergencyLog emergency : emergencyLogList) {
            int minutesAgo = TimeUtil.findMinutesDiff(emergency.getRequestTime());
            list.add(GmWebRTCResponse.builder()
                    .webRTCType(1)
                    .idx(emergency.getEid())
                    .emergencyType(emergency.getType())
                    .minutesAgo(minutesAgo)
                    .username(emergency.getUid().getUsername())
                    .build());
        }

        return list;
    }

}
