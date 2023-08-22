package com.planty.api.gm.booking.service;

import com.planty.api.booking.response.BookingResponse;
import com.planty.api.gm.booking.response.GmBookingResponse;
import com.planty.common.exception.handler.CustomException;
import com.planty.common.util.SecurityUtil;
import com.planty.common.util.TimeUtil;
import com.planty.db.entity.ConsultingBooking;
import com.planty.db.entity.GmInfo;
import com.planty.db.entity.ViewUserConsulting;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import static com.planty.common.exception.handler.ErrorCode.*;
import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.START;
import static org.springframework.data.domain.Sort.Order.asc;
import static org.springframework.data.domain.Sort.Order.desc;

@Slf4j
@Service
@RequiredArgsConstructor
public class GmBookingServiceImpl implements GmBookingService {

    private final GmInfoRepository gmInfoRepository;
    private final ConsultingBookingRepository consultingBookingRepository;
    private final SubscribeProductRepository subscribeProductRepository;

    @Override // 그린메이트 예약 조회
    public List<GmBookingResponse> getGmBooking(Long spid) throws ParseException {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gm = gmInfoRepository.findByGid(gid)
                .orElseThrow(() -> new CustomException(GM_NOT_FOUND));
        boolean isSpid = true;
        if (spid == null) {
            isSpid = false;
        }
        if (isSpid) {   // 유효한 spid에 대한 요청인지 확인
            subscribeProductRepository.findBySpid(spid)
                    .orElseThrow(() -> new CustomException(PRODUCT_NOT_FOUND));
        }

        List<GmBookingResponse> bookingList = new ArrayList<>();
        List<ConsultingBooking> list = consultingBookingRepository.findByGidAndActiveAndCancel(gm, false, false, Sort.by(asc("date"),asc("timeIdx")));
//        List<ViewUserConsulting> list = viewUserConsultingRepository.findByUidAndCancelFalse(user.getUid(), Sort.by(desc("date"),desc("time")));

        String now = TimeUtil.findCurrentTimestamp();
        for (ConsultingBooking item : list) {
            if (isSpid && item.getSid().getSpid().getSpid() != spid) {
                continue;
            }
            if (!TimeUtil.isFuture(now, item.getDate(), item.getTimeIdx().getIdx())) continue;
            GmBookingResponse booking = GmBookingResponse.builder()
                    .sid(item.getSid().getSid())
                    .cid(item.getCid())
                    .title(item.getSid().getSpid().getName())
                    .date(item.getDate())
                    .time(item.getTimeIdx().getIdx())
                    .greenmate(item.getGid().getNickname())
                    .user(item.getUid().getUsername())
                    .build();
            bookingList.add(booking);
        }
        return bookingList;
    }
}
