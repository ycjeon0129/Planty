package com.planty.api.subscribe.service;

import com.planty.api.embedded.response.UserSubscribeEmbeddedResponse;
import com.planty.api.subscribe.request.UserSubscribeRequest;
import com.planty.api.subscribe.response.NearConsultingResponse;
import com.planty.api.subscribe.response.UserSubscribeDetailResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.common.util.TimeUtil;
import com.planty.db.entity.*;
import com.planty.db.repository.*;
import com.planty.api.subscribe.response.UserSubscribeResponse;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.*;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import static com.planty.common.util.LogCurrent.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class SubscribeServiceImpl implements SubscribeService {
    private final ViewUserSubscribeRepository viewUserSubscribeRepository;
    private final ViewUserConsultingRepository userConsultingRepository;
    private final UserInfoRepository userInfoRepository;
    private final PlantDataRepository plantDataRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final UserSubscribeRepository userSubscribeRepository;

    @Override // 사용자 구독 조회
    public List<UserSubscribeResponse> getUserSubscribe(int done) throws ParseException {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        List<UserSubscribeResponse> subscribeList = new ArrayList<>();

        Sort sort = Sort.by(
                Sort.Order.asc("endDate"),
                Sort.Order.asc("cbDate"),
                Sort.Order.asc("cbTime")
        );

        List<ViewUserSubscribe> list = new ArrayList<>();
        if(done == 1) // 종료여부 N
            list = viewUserSubscribeRepository.findByUidAndEndDateNull(user.getUid(), sort);
        else if(done == 2) // 종료여부 Y
            list = viewUserSubscribeRepository.findByUidAndEndDateNotNull(user.getUid(), sort);
        else // 0을 포함한 다른 값들은 모두 조회
            list = viewUserSubscribeRepository.findByUid(user.getUid(), sort);

        for(ViewUserSubscribe item : list) {
            boolean end = item.getEndDate() != null;
            String endDate = end? item.getEndDate() : TimeUtil.findEndDate(item.getStartDate(), item.getPeriod());
            NearConsultingResponse nearConsultingInfo = new NearConsultingResponse(item.getCid(), item.getCbDate(), item.getCbCancel(), item.getCbActive(), item.getCbTime());
            UserSubscribeResponse sub = UserSubscribeResponse.builder()
                    .sid(item.getSid())
                    .startDate(item.getStartDate())
                    .endDate(endDate)
                    .end(end)
                    .title(item.getSpName())
                    .thumbnail(item.getThumbnail())
                    .consultingCnt(item.getConsultingCnt())
                    .consultingRemainCnt(item.getConsultingRemainCnt())
                    .greenmate(item.getGMNickname())
                    .nearConsulting(nearConsultingInfo)
                    .build();
            subscribeList.add(sub);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return subscribeList;
    }

    @Override // 사용자 구독 상세 조회
    public UserSubscribeDetailResponse getUserSubscribeDetail(Long sid) throws ParseException{
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        ViewUserSubscribe sub = viewUserSubscribeRepository.findByUidAndSid(user.getUid(), sid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_SID_NOT_FOUND));

        List<PlantDataAvgInterface> plantDataList = plantDataRepository.findDateAvgByArduinoId(sub.getArduinoId());
        List<UserSubscribeEmbeddedResponse> embeddedList = new ArrayList<>();

        for(PlantDataAvgInterface item : plantDataList) {
            UserSubscribeEmbeddedResponse embedded = UserSubscribeEmbeddedResponse.builder()
                    .date(item.getDate().substring(2))
                    .temp(Math.round((item.getTemp()*100) / 100))
                    .humidity(Math.round((item.getHumidity()*100) / 100))
                    .soil(Math.round((item.getSoil()*100) / 100))
                    .build();
            embeddedList.add(embedded);
        }

        NearConsultingResponse nearConsultingInfo = new NearConsultingResponse(sub.getCid(), sub.getCbDate(), sub.getCbCancel(), sub.getCbActive(), sub.getCbTime());

        boolean end = sub.getEndDate() != null;
        String endDate = end? sub.getEndDate() : TimeUtil.findEndDate(sub.getStartDate(), sub.getPeriod());

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return UserSubscribeDetailResponse.builder()
                .sid(sub.getSid())
                .startDate(sub.getStartDate())
                .endDate(endDate)
                .end(end)
                .title(sub.getSpName())
                .thumbnail(sub.getThumbnail())
                .plant(sub.getPiName())
                .greenmate(sub.getGMNickname())
                .consultingCnt(sub.getConsultingCnt())
                .consultingRemainCnt(sub.getConsultingRemainCnt())
                .nearConsulting(nearConsultingInfo)
                .embeddedInfo(embeddedList)
                .build();
    }

    @Override // 사용자 구독 등록
    public boolean regUserSubscribe(UserSubscribeRequest userSubscribeRequest) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        SubscribeProduct product = subscribeProductRepository.findBySpid(userSubscribeRequest.getSpid())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.PRODUCT_NOT_FOUND));

        if(userSubscribeRepository.findByUidAndSpidAndEndDateIsNull(user, product).isPresent()) { // EndDateIsNull -> 현재 구독 상품 중에 해당 상품이 있는지 확인
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
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        UserSubscribe userSubscribe = userSubscribeRepository.findByUidAndSid(user,sid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_SID_NOT_FOUND));

        if (userSubscribe != null) {
            ZoneId zoneId = ZoneId.of("Asia/Seoul");
            ZonedDateTime zonedDateTime = ZonedDateTime.now( zoneId );
            String output = zonedDateTime.toString().split("T")[0];
            userSubscribe.setEndDate(output);
            userSubscribeRepository.save(userSubscribe); // delete -> save : endDate update
            log.info(logCurrent(getClassName(), getMethodName(), END));
            return true;
        }

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return false;
    }
}
