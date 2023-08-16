package com.planty.api.booking.service;

import com.planty.api.booking.request.UserBookingRequest;
import com.planty.api.booking.response.BookingResponse;
import com.planty.common.exception.handler.CustomException;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.*;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.planty.common.exception.handler.ErrorCode.*;
import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;
import static org.springframework.data.domain.Sort.Order.asc;

@Slf4j
@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    private final UserInfoRepository userInfoRepository;
    private final TimeTableRepository timeTableRepository;
    private final UserSubscribeRepository userSubscribeRepository;
    private final ConsultingBookingRepository consultingBookingRepository;
    private final GmInfoRepository gmInfoRepository;

    @Override // 사용자 예약 조회
    public List<BookingResponse> getUserBooking() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        List<BookingResponse> bookingList = new ArrayList<>();
        List<ConsultingBooking> list = consultingBookingRepository.findByUid(user, Sort.by(asc("date"),asc("timeIdx")));
        for (ConsultingBooking item : list) {
            BookingResponse booking = BookingResponse.builder()
                    .sid(item.getSid().getSid())
                    .cid(item.getCid())
                    .title(item.getSid().getSpid().getName())
                    .date(item.getDate())
                    .time(item.getTimeIdx().getIdx())
                    .greenmate(item.getGid().getNickname())
                    .user(item.getUid().getUserName())
                    .active(item.getActive())
                    .cancel(item.getCancel())
                    .build();
            bookingList.add(booking);
        }
        return bookingList;
    }

    @Override // 예약 날짜 조회
    public boolean[] getUserBookingDate(Long sid, String date) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        boolean[] bookingDateList = new boolean[20];

        UserSubscribe subscribe = userSubscribeRepository.findByUidAndSid(user, sid)
                .orElseThrow(() -> new CustomException(USER_SID_NOT_FOUND));

        List<ConsultingBooking> bookingDate = consultingBookingRepository.findByGidAndDateOrderByTimeIdx(subscribe.getGid(), date);
        if(bookingDate.isEmpty()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return bookingDateList;
        }
        for(ConsultingBooking item : bookingDate) {
            bookingDateList[item.getTimeIdx().getIdx()-1] = true;
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return bookingDateList;
    }
    @Override // 사용자 컨설팅 등록
    public boolean regUserBooking(UserBookingRequest userBookingRequest) throws IllegalAccessException {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        TimeTable time = timeTableRepository.findByIdx(userBookingRequest.getTimeId())
                .orElseThrow(() -> new CustomException(TIME_NOT_FOUND));

        UserSubscribe subscribe = userSubscribeRepository.findByUidAndSid(user,userBookingRequest.getSid())
                .orElseThrow(() -> new CustomException(USER_SID_NOT_FOUND));

        if(subscribe.getConsultingRemainCnt() < 1) {
            log.info("남은 컨설팅 횟수가 없습니다.");
            log.info(logCurrent(getClassName(), getMethodName(), END));
            throw new CustomException(CONSULTING_COUNT_NOT_ENOUGH);
        }
        GmInfo gm = gmInfoRepository.findByGid(subscribe.getGid().getGid())
                .orElseThrow(() -> new CustomException(GM_NOT_FOUND));

        if(consultingBookingRepository.findBySidAndTimeIdxAndDateAndCancelFalseAndActiveFalse(subscribe, time, userBookingRequest.getDate()).isPresent()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            throw new CustomException(CONSULTING_TIME_OCCUPIED);
        }

        ConsultingBooking consultingBooking = ConsultingBooking.builder()
                .sid(subscribe)
                .uid(user)
                .gid(gm)
                .timeIdx(time)
                .date(userBookingRequest.getDate())
                .build();

        consultingBookingRepository.save(consultingBooking);
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return true;
    }

    @Override // 사용자 컨설팅 삭제
    public boolean deleteUserBooking(Long cid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));

        ConsultingBooking booking = consultingBookingRepository.findByUidAndCid(user, cid)
                .orElseThrow(() -> new CustomException(BOOKING_NOT_FOUND));

        if(booking.getActive() || booking.getCancel()) {
            System.out.println("실행 or 취소된 예약입니다.");
            log.info(logCurrent(getClassName(), getMethodName(), END));
            throw new CustomException(BOOKING_ALREADY_ACCESS);
        }
        //todo : 현재시간과 예약 시간 비교

        booking.setCancel(true); // 예약 취소 -> cancel 활성화 (취소(1), 미취소(0))
        consultingBookingRepository.save(booking);
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return true;

    }
}
