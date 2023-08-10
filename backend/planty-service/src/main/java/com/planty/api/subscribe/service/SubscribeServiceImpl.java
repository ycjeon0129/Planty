package com.planty.api.subscribe.service;

import com.planty.api.embedded.response.UserSubscribeEmbeddedResponse;
import com.planty.api.subscribe.request.UserSubscribeRequest;
import com.planty.api.subscribe.response.UserSubscribeDatailResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.db.entity.*;
import com.planty.db.repository.*;
import com.planty.api.subscribe.response.UserSubscribeResponse;

import java.util.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import static com.planty.common.util.LogCurrent.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class SubscribeServiceImpl implements SubscribeService {
    private final ViewUserSubscribeRepository viewUserSubscribeRepository;
    private final ViewUserConsultingRepository userConsultingRepository;
    private final UserInfoRepository userInfoRepository;
    private final UserEmbeddedRepository userEmbeddedRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final UserSubscribeRepository userSubscribeRepository;

    @Override // 사용자 구독 조회
    public List<UserSubscribeResponse> getUserSubscribe() {
        log.info(logCurrent(getClassName(), getMethodName(), START));
//        String email = SecurityUtil.getCurrentUserEmail();
//        UserInfo user = userInfoRepository.findByUserEmail(email)
//                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        UserInfo user = userInfoRepository.findByUserId("ssafyDevelop")
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        List<UserSubscribeResponse> subscribeList = new ArrayList<>();
        List<ViewUserSubscribe> list = viewUserSubscribeRepository.findByUid(user.getUid());

        for(ViewUserSubscribe item : list) {
            boolean end = item.getEndDate() != null;
            UserSubscribeResponse sub = UserSubscribeResponse.builder()
                    .sid(item.getSid())
                    .startDate(item.getStartDate())
                    .end(end)
                    .title(item.getSpName())
                    .consultingCnt(item.getConsultingCnt())
                    .consultingRemainCnt(item.getConsultingRemainCnt())
                    .consultingDate(item.getCbDate())
                    .consultingCancel(item.getCbCancel())
                    .consultingActive(item.getCbActive())
                    .consultingTime(item.getCbTime())
                    .build();
            subscribeList.add(sub);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return subscribeList;
    }

    @Override // 사용자 구독 상세 조회
    public UserSubscribeDatailResponse getUserSubscribeDetail(Long sid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        //        String email = SecurityUtil.getCurrentUserEmail();
//        UserInfo user = userInfoRepository.findByUserEmail(email)
//                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        UserInfo user = userInfoRepository.findByUserId("ssafyDevelop")
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        ViewUserSubscribe sub = viewUserSubscribeRepository.findByUidAndSid(user.getUid(), sid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_SID_NOT_FOUND));

        List<PlantData> plantDataList = userEmbeddedRepository.findByArduinoId(sub.getArduinoId());
        List<UserSubscribeEmbeddedResponse> embeddedList = new ArrayList<>();

        for(PlantData item : plantDataList) {
            UserSubscribeEmbeddedResponse embedded = UserSubscribeEmbeddedResponse.builder()
                    .date(item.getDate())
                    .time(item.getTime())
                    .temp(item.getTemp())
                    .humidity(item.getHumidity())
                    .soil(item.getSoil())
                    .build();
            embeddedList.add(embedded);
        }

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return UserSubscribeDatailResponse.builder()
                .sid(sub.getSid())
                .startDate(sub.getStartDate())
                .endDate(sub.getEndDate())
                .title(sub.getSpName())
                .plant(sub.getPiName())
                .greenmate(sub.getGMNickname())
                .consultingCnt(sub.getConsultingCnt())
                .consultingRemainCnt(sub.getConsultingRemainCnt())
                .consultingDate(sub.getCbDate())
                .consultingCancel(sub.getCbCancel())
                .consultingActive(sub.getCbActive())
                .consultingTime(sub.getCbTime())
                .embeddedInfo(embeddedList)
                .build();
    }

    @Override // 사용자 구독 등록
    public boolean regUserSubscribe(UserSubscribeRequest UserSubscribeRequest) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        //        String email = SecurityUtil.getCurrentUserEmail();
//        UserInfo user = userInfoRepository.findByUserEmail(email)
//                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        UserInfo user = userInfoRepository.findByUserId("ssafyDevelop")
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        SubscribeProduct product = subscribeProductRepository.findBySpid(UserSubscribeRequest.getSpid())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.PRODUCT_NOT_FOUND));

        if(userSubscribeRepository.findByUidAndSpid(user, product).isPresent()) {
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return false;
        }

        UserSubscribe userSubscribe = UserSubscribe.builder()
                .uid(user)
                .spid(product)
                .gid(product.getGid())
                .consultingRemainCnt(product.getConsultingCnt())
                .build();

        userSubscribeRepository.save(userSubscribe);
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return true;
    }

    @Override // 사용자 구독 삭제
    public boolean deleteUserSubscribe(Long sid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
//        String email = SecurityUtil.getCurrentUserEmail();
//        UserInfo user = userInfoRepository.findByUserEmail(email)
//                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));
        UserInfo user = userInfoRepository.findByUserId("ssafyDevelop")
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        UserSubscribe userSubscribe = userSubscribeRepository.findByUidAndSid(user,sid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_SID_NOT_FOUND));

        if (userSubscribe != null) {
            userSubscribeRepository.delete(userSubscribe);
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return true;
        }

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return false;
    }
}
