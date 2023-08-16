package com.planty.api.embedded.service;

import com.planty.api.booking.request.UserBookingRequest;
import com.planty.api.embedded.repuest.EmbeddedRequest;
import com.planty.api.embedded.response.UserSubscribeEmbeddedResponse;
import com.planty.common.exception.handler.ExceptionHandler;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.*;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.END;

@Slf4j
@Service
@RequiredArgsConstructor
public class EmbeddedServiceImpl implements EmbeddedService {
    private final UserInfoRepository userInfoRepository;
    private final UserSubscribeRepository userSubscribeRepository;
    private final PlantDataRepository plantDataRepository;
    @Override // 임베디드 데이터 등록
    public boolean regEmbedded (EmbeddedRequest embeddedRequest){
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        UserSubscribe subscribe = userSubscribeRepository.findByUidAndSid(user,embeddedRequest.getSid())
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_SID_NOT_FOUND));

        PlantData plantData = PlantData.builder()
                .arduinoId(subscribe.getArduinoId())
                .temp(embeddedRequest.getTemp())
                .humidity(embeddedRequest.getHumidity())
                .soil(embeddedRequest.getSoil())
                .build();

        plantDataRepository.save(plantData);
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return true;
    }

    @Override // 임베디드 데이터 조회
    public List<UserSubscribeEmbeddedResponse> getEmbedded(Long sid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo user = userInfoRepository.findByUserEmail(email)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_NOT_FOUND));

        UserSubscribe subscribe = userSubscribeRepository.findByUidAndSid(user,sid)
                .orElseThrow(() -> new NullPointerException(ExceptionHandler.USER_SID_NOT_FOUND));

        List<PlantDataAvgInterface> list = plantDataRepository.findDateAvgByArduinoId(subscribe.getArduinoId());
        List<UserSubscribeEmbeddedResponse> embeddedList = new ArrayList<>();
        for(PlantDataAvgInterface item : list) {
            UserSubscribeEmbeddedResponse embedded = UserSubscribeEmbeddedResponse.builder()
                    .date(item.getDate().substring(2))
                    .temp(Math.round((item.getTemp()*100) / 100))
                    .humidity(Math.round((item.getHumidity()*100) / 100))
                    .soil(Math.round((item.getSoil()*100) / 100))
                    .build();
            embeddedList.add(embedded);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return embeddedList;
    }
}