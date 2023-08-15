package com.planty.api.gm.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.gm.consulting.request.GmConsultingRecordRequest;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.model.SessionTokenResponse;
import com.planty.common.util.OpenViduUtil;
import com.planty.common.util.SecurityUtil;
import com.planty.common.util.TimeUtil;
import com.planty.db.entity.*;
import com.planty.db.repository.*;
import io.openvidu.java.client.OpenViduHttpException;
import io.openvidu.java.client.OpenViduJavaClientException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@Service
@RequiredArgsConstructor
public class GmConsultingServiceImpl implements GmConsultingService {

    private final GmInfoRepository gmInfoRepository;
    private final ConsultingBookingRepository consultingBookingRepository;
    private final ConsultingLogRepository consultingLogRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final UserSubscribeRepository userSubscribeRepository;
    private final PlantyInfoRepository plantyInfoRepository;
    private final ViewUserConsultingRepository viewUserConsultingRepository;
    @Autowired
    private OpenViduUtil openViduUtil;

    @Override
    public List<UserConsultingResponse> findConsultingList(Long spid) {
        List<UserConsultingResponse> consultingList = new ArrayList<>();
        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gm = gmInfoRepository.findByGid(gid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.GM_NOT_FOUND));

        List<ViewUserConsulting> list = new ArrayList<>();
        Sort sort = Sort.by(
                Sort.Order.desc("date"),
                Sort.Order.desc("time")
        );
        if (spid == null) {
            list = viewUserConsultingRepository.findByGid(gm.getGid(), sort);
        } else {
            list = viewUserConsultingRepository.findByGidAndSpid(gm.getGid(), spid, sort);
        }
        for(ViewUserConsulting item : list) {
            consultingList.add(
                    UserConsultingResponse.builder()
                            .cid(item.getCid())
                            .sid(item.getSid())
                            .time(item.getTime())
                            .date(item.getDate())
                            .cancel(item.getCancel())
                            .active(item.getActive())
                            .subscribeProductName(item.getName())
                            .recommendedStartDate(item.getRecommendedStartDate())
                            .recommendedEndDate(item.getRecommendedEndDate())
                            .advice(item.getContent())
                            .startTime(item.getStartTime())
                            .endTime(item.getEndTime())
                            .build()
            );
        }
        return consultingList;
    }

    @Override
    @Transactional
    public SessionTokenResponse findSessionToken(Long cid) throws IllegalAccessException, OpenViduJavaClientException, OpenViduHttpException {
        ConsultingBooking bookingInfo = consultingBookingRepository.findByCid(cid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.BOOKING_NOT_FOUND));
        if (bookingInfo.getGid().getGid() != SecurityUtil.getCurrentGid()) {
            throw new IllegalAccessException(ExceptionHandler.CONSULTING_UNAUTHORIZED);
        }
        if (bookingInfo.getActive()) {
            throw new IllegalAccessException(ExceptionHandler.CONSULTING_ALREADY_EXIST);
        }
        bookingInfo.setActive(true);
        consultingBookingRepository.save(bookingInfo);
        String sessionId = bookingInfo.getConnection();
        Map<String, Object> params = new HashMap<>();
        params.put("cid", bookingInfo.getCid());
        params.put("sessionId", bookingInfo.getConnection());
        System.out.println(params.get("sessionId"));
        String token = openViduUtil.createConnection(params);
        System.out.println(token);
        SessionTokenResponse tokenResponse = new SessionTokenResponse();
        tokenResponse.setToken(token);

        return tokenResponse;
    }

    @Override
    @Transactional
    public void deleteSession(GmConsultingRecordRequest recordInfo) throws IllegalAccessException {
        ConsultingBooking bookingInfo = consultingBookingRepository.findByCid(recordInfo.getCid())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.BOOKING_NOT_FOUND));
        if (bookingInfo.getGid().getGid() != SecurityUtil.getCurrentGid()) {
            throw new IllegalAccessException(ExceptionHandler.CONSULTING_UNAUTHORIZED);
        }
        ConsultingLog skeleton = consultingLogRepository.findByCid(bookingInfo)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.CONSULTING_LOG_NOT_FOUND));
        if (skeleton.getContent() != null) {    // 이미 작성된 컨설팅 로그
            throw new IllegalAccessException(ExceptionHandler.CONSULTING_ALREADY_EXIST);
        }
        List<ConsultingBooking> list = consultingBookingRepository.findAllByCidLessThanAndSidAndCancelFalse(bookingInfo.getCid(), bookingInfo.getSid());

        skeleton.setRecommendedStartDate(recordInfo.getRecommendedStartDate());
        skeleton.setRecommendedEndDate(recordInfo.getRecommendedEndDate());
        skeleton.setTimes(list.size());
        skeleton.setContent(recordInfo.getContent());
        skeleton.setEndTime(TimeUtil.findCurrentTimestamp());

        consultingLogRepository.save(skeleton);

        bookingInfo.setConnection(null);
        consultingBookingRepository.save(bookingInfo);

        UserSubscribe subscribeInfo = userSubscribeRepository.findBySid(bookingInfo.getSid().getSid())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_SID_NOT_FOUND));
        subscribeInfo.setConsultingRemainCnt( (subscribeInfo.getConsultingRemainCnt()-1) );
        userSubscribeRepository.save(subscribeInfo);
    }

    @Override
    public void setStartTime(Long cid) {
        ConsultingBooking bookingInfo = consultingBookingRepository.findByCid(cid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.BOOKING_NOT_FOUND));
        ConsultingLog consultingInfo = ConsultingLog.builder()
                .cid(bookingInfo)
                .startTime(TimeUtil.findCurrentTimestamp())
                .build();
        consultingLogRepository.save(consultingInfo);
    }
}
