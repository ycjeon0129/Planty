package com.planty.api.gm.consulting.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.gm.consulting.request.GmConsultingRecordRequest;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.common.util.TimeUtil;
import com.planty.db.entity.ConsultingBooking;
import com.planty.db.entity.ConsultingLog;
import com.planty.db.entity.GmInfo;
import com.planty.db.entity.ViewUserConsulting;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

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
    public String findSessionToken(Long cid) throws IllegalAccessException {
        ConsultingBooking bookingInfo = consultingBookingRepository.findByCid(cid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.BOOKING_NOT_FOUND));
        if (bookingInfo.getGid().getGid() != SecurityUtil.getCurrentGid()) {
            throw new IllegalAccessException(ExceptionHandler.CONSULTING_UNAUTHORIZED);
        }
        if (!bookingInfo.getActive()) {
            bookingInfo.setActive(true);
            consultingBookingRepository.save(bookingInfo);
        }
        return bookingInfo.getConnection();
    }

    @Override
    public void deleteSession(GmConsultingRecordRequest recordInfo) throws IllegalAccessException {
        ConsultingBooking bookingInfo = consultingBookingRepository.findByCid(recordInfo.getCid())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.BOOKING_NOT_FOUND));
        if (bookingInfo.getGid().getGid() != SecurityUtil.getCurrentGid()) {
            throw new IllegalAccessException(ExceptionHandler.CONSULTING_UNAUTHORIZED);
        }
        ConsultingLog skeleton = consultingLogRepository.findByCid(bookingInfo)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.CONSULTING_LOG_NOT_FOUND));
        List<ConsultingBooking> list = consultingBookingRepository.findAllByCidLessThanAndSidAndCancelFalse(bookingInfo.getCid(), bookingInfo.getSid());

        skeleton.setRecommendedStartDate(recordInfo.getRecommendedStartDate());
        skeleton.setRecommendedEndDate(recordInfo.getRecommendedEndDate());
        skeleton.setTimes(list.size());
        skeleton.setContent(recordInfo.getContent());
        skeleton.setEndTime(TimeUtil.findCurrentTimestamp());

        consultingLogRepository.save(skeleton);

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
