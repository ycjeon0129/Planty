package com.planty.api.gm.booking.service;

import com.planty.api.booking.response.BookingResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.ConsultingBooking;
import com.planty.db.entity.GmInfo;
import com.planty.db.entity.ViewUserConsulting;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.START;

@Slf4j
@Service
@RequiredArgsConstructor
public class GmBookingServiceImpl implements GmBookingService {
    private final GmInfoRepository gmInfoRepository;
    private final ConsultingBookingRepository consultingBookingRepository;

    @Override // 그린메이트 예약 조회
    public List<BookingResponse> getGmBooking() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        Long gid = SecurityUtil.getCurrentGid();
        GmInfo gm = gmInfoRepository.findByGid(gid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.GM_NOT_FOUND));

        List<BookingResponse> bookingList = new ArrayList<>();
        List<ConsultingBooking> list = consultingBookingRepository.findByGid(gm);
        for (ConsultingBooking item : list) {
            BookingResponse booking = BookingResponse.builder()
                    .sid(item.getSid().getSid())
                    .cid(item.getCid())
                    .title(item.getSid().getSpid().getName())
                    .date(item.getDate())
                    .time(item.getTimeIdx().getIdx())
                    .greenmate(item.getGid().getNickname())
                    .user(item.getUid().getUserName())
                    .build();
            bookingList.add(booking);
        }
        return bookingList;
    }
}
