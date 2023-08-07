package com.planty.api.subscribe.service;

import com.planty.db.entity.ConsultingBooking;
import com.planty.db.entity.ConsultingBookingUserMapping;
import com.planty.db.entity.UserInfo;
import com.planty.db.repository.UserConsultingRepository;
import com.planty.db.repository.UserInfoRepository;
import com.planty.db.repository.UserSubscribeRepository;
import com.planty.api.subscribe.response.UserSubscribeResponse;

import java.time.LocalDateTime;
import java.util.*;

import com.planty.db.entity.ViewUserSubscribe;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Slf4j
@Service
@RequiredArgsConstructor
public class SubscribeServiceImpl implements SubscribeService {
    private final UserSubscribeRepository userSubscribeRepository;
    private final UserConsultingRepository userConsultingRepository;
    private final UserInfoRepository userInfoRepository;
//    public static boolean timeComparison(String date, String time) {
//        LocalDateTime now = LocalDateTime.now();
//        String nowDate = now.getYear() + "-" + now.getMonthValue() + "-" + now.getDayOfMonth();
//        if(nowDate.equals(date)) {
//            int hour = now.getHour();
//            int minute = now.getMinute();
//            if(hour == Integer.parseInt(time.split(":")[0])) {
//
//            }
//        } else {
//            return false;
//        } return false;
//    }
    @Override
    public List<UserSubscribeResponse> getUserSubscribe(String userId) {
        UserInfo user = userInfoRepository.findByUserId(userId).orElseThrow(() -> {
            throw new NullPointerException();
        });

        List<UserSubscribeResponse> subscribeList = new ArrayList<>();
        List<ViewUserSubscribe> list = userSubscribeRepository.findByUidOrderBySid(Math.toIntExact(user.getUid()));
        List<ConsultingBooking> curConsultingList = userConsultingRepository.findConsultingBooking(user);

        for(ViewUserSubscribe item : list) {
            boolean end = item.getEndDate() != null;
            String date = null;
            boolean cancel = false;
            boolean active = false;
            String time = null;

            for(ConsultingBooking curbooking : curConsultingList) {
                if (curbooking.getSid().getSid() == item.getSid().intValue()) {
                    date = curbooking.getDate();
                    cancel = curbooking.getCancel();
                    active = curbooking.getActive();
                    time = curbooking.getTimeIdx().getTime();
                    break;
                }
            }
            UserSubscribeResponse sub = UserSubscribeResponse.builder()
                    .sid(item.getSid())
                    .startDate(item.getStartDate())
                    .end(end)
                    .subscribeProductName(item.getSpName())
                    .consultingCnt(item.getConsultingCnt())
                    .consultingRemainCnt(item.getConsultingRemainCnt())
                    .consultingDate(date)
                    .consultingCancel(cancel)
                    .consultingActive(active)
                    .consultingTime(time)
                    .build();
            subscribeList.add(sub);

        }

        // todo : FindSubscribeResponse -> cbDate 추가
        return subscribeList;
    }
}
