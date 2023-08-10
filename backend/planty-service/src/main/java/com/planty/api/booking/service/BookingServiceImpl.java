package com.planty.api.booking.service;

import com.planty.api.booking.request.UserBookingRequest;
import com.planty.api.booking.response.UserBookingResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.*;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;
@Slf4j
@Service
@RequiredArgsConstructor
public class BookingServiceImpl implements BookingService {
    private final ViewUserConsultingRepository viewUserConsultingRepository;
    private final UserInfoRepository userInfoRepository;
    private final TimeTableRepository timeTableRepository;
    private final UserSubscribeRepository userSubscribeRepository;
    private final ConsultingBookingRepository consultingBookingRepository;
    private final GmInfoRepository gmInfoRepository;

    @Override
    public List<UserBookingResponse> getUserBooking() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        List<UserBookingResponse> bookingList = new ArrayList<>();
        List<ViewUserConsulting> list = viewUserConsultingRepository.findByUid(user.getUid());
        for(ViewUserConsulting item : list) {
            UserBookingResponse booking = UserBookingResponse.builder()
                    .sid(item.getSid())
                    .cid(item.getCid())
                    .title(item.getName())
                    .date(item.getDate())
                    .time(item.getTime())
                    .greenmate(item.getGmName())
                    .build();
            bookingList.add(booking);
        }
        return bookingList;
    }

//    @Override
//    public Boolean[] getUserBookingDate(Long sid,String date) {
//        log.info(logCurrent(getClassName(), getMethodName(), START));
//        String email = SecurityUtil.getCurrentUserEmail();
//        UserInfo user = userInfoRepository.findByUserEmail(email)
//                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));
//
//        List<UserBookingResponse> bookingList = new ArrayList<>();
//        List<ViewUserConsulting> list = viewUserConsultingRepository.findByUid(user.getUid());
//        for(ViewUserConsulting item : list) {
//            UserBookingResponse booking = UserBookingResponse.builder()
//                    .sid(item.getSid())
//                    .cid(item.getCid())
//                    .title(item.getName())
//                    .date(item.getDate())
//                    .time(item.getTime())
//                    .greenmate(item.getGmName())
//                    .build();
//            bookingList.add(booking);
//        }
//        return bookingList;
//    }
    @Override // 사용자 컨설팅 등록
    public boolean regUserBooking(UserBookingRequest userBookingRequest) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        TimeTable time = timeTableRepository.findByIdx(userBookingRequest.getTimeId())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.TIME_NOT_FOUND));

        UserSubscribe subscribe = userSubscribeRepository.findByUidAndSid(user,userBookingRequest.getSid())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_SID_NOT_FOUND));

        if(subscribe.getConsultingRemainCnt() < 1) {
            log.info("남은 컨설팅 횟수가 없습니다.");
            return false;
        }
        GmInfo gm = gmInfoRepository.findByGid(subscribe.getGid().getGid())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.GM_NOT_FOUND));

        if(consultingBookingRepository.findBySidAndTimeIdxAndDate(subscribe, time, userBookingRequest.getDate()).isPresent()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return false;
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
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        ConsultingBooking booking = consultingBookingRepository.findByUidAndCid(user, cid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.BOOKING_NOT_FOUNT));

        if(booking.getActive() || booking.getCancel()) {
            System.out.println("실행 or 취소된 예약입니다.");
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return false;
        }
        //todo : 현재시간과 예약 시간 비교
//        SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd hh:mm");
//        String bookingTime = booking.getDate() + " " + booking.getTimeIdx().getTime();
//        String nowTime = dateformat.format(new Date(System.currentTimeMillis() - 1000 * 60 * 60));
//        System.out.println(bookingTime);
//        System.out.println(nowTime);
//
//        if(nowTime.compareTo(bookingTime) > 0) {
//            System.out.println("지난 예약입니다.");
//            log.info(logCurrent(getClassName(), getMethodName(), END));
//            return false;
//        }

        if (booking != null) {
            consultingBookingRepository.delete(booking);
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return true;
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return false;
    }
}
