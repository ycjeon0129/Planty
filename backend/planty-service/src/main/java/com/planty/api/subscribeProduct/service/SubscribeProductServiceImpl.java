package com.planty.api.subscribeProduct.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.consulting.service.ConsultingService;
import com.planty.api.subscribe.response.UserSubscribeDetailResponse;
import com.planty.api.subscribeProduct.request.SubscribeProductRequest;
import com.planty.api.subscribeProduct.response.SubscribeProductDetailResponse;
import com.planty.api.subscribeProduct.response.SubscribeProductResponse;
import com.planty.common.exception.handler.CustomException;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.*;
import com.planty.db.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.planty.common.exception.handler.ErrorCode.*;
import static com.planty.common.util.LogCurrent.*;
import static com.planty.common.util.LogCurrent.START;
@Slf4j
@Service
@RequiredArgsConstructor
public class SubscribeProductServiceImpl implements SubscribeProductService {
    private final GmInfoRepository gmInfoRepository;
    private final SubscribeProductRepository subscribeProductRepository;
    private final PlantyInfoRepository plantyInfoRepository;
    @Override // 구독 상품 조회
    public List<SubscribeProductResponse> getSubscribeProduct(int size, int place, int eatable) {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        List<SubscribeProductResponse> subscribeProductList = new ArrayList<>();
        List<SubscribeProduct> list = subscribeProductRepository.findAllByOrderBySpidDesc();
        for(SubscribeProduct item : list) {
            if(size >= 0 && size <= 2 && item.getPlantInfoIdx().getSize() != size) continue; // 식용 여부. 식용(1), 비식용(0)
            if(place >= 0 && place <= 2 && item.getPlantInfoIdx().getPlace()!= place) continue; //크기. 소(0), 중(1), 대(2)
            if(eatable >= 0 && eatable <= 1 && item.getPlantInfoIdx().getEatable()!= eatable) continue; // 식용 여부. 식용(1), 비식용(0)

            SubscribeProductResponse product = SubscribeProductResponse.builder()
                    .spid(item.getSpid())
                    //.imgUrl
                    .name(item.getName())
                    .period(item.getPeriod())
                    .plantName(item.getPlantInfoIdx().getName())
                    .price(item.getPrice())
                    .level(item.getLevel())
                    .build();
            subscribeProductList.add(product);
        }
        log.info(logCurrent(getClassName(), getMethodName(), END));
        return subscribeProductList;
    }

    @Override // 구독 상품 상세 조회
    public SubscribeProductDetailResponse getSubscribeProductDetail(Long spid) {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        SubscribeProduct item = subscribeProductRepository.findBySpid(spid)
                .orElseThrow(() -> new CustomException(PRODUCT_NOT_FOUND));

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return SubscribeProductDetailResponse.builder()
                .spid(item.getSpid())
                //.imgUrl
                .name(item.getName())
                .period(item.getPeriod())
                .plantName(item.getPlantInfoIdx().getName())
                .price(item.getPrice())
                .level(item.getLevel())
                .description(item.getDescription())
                .size(item.getPlantInfoIdx().getSize())
                .place(item.getPlantInfoIdx().getPlace())
                .eatable(item.getPlantInfoIdx().getEatable())
                .greenmate(item.getGid().getNickname())
                .consultingCnt(item.getConsultingCnt())
                .build();

    }

    @Override
    @Transactional
    public boolean regSubscribeProduct(SubscribeProductRequest spr) {
        log.info(logCurrent(getClassName(), getMethodName(), START));
        GmInfo gm = gmInfoRepository.findByGid(spr.getGid())
                .orElseThrow(() -> new CustomException(GM_NOT_FOUND));
        if(!(spr.getSize() >= 0 && spr.getSize() <= 2
        && spr.getPlace() >= 0 && spr.getPlace() <= 2
        && spr.getEatable() >= 0 && spr.getEatable() <= 1
        && spr.getLevel() >= 1 && spr.getLevel() <= 3)) {
            throw new CustomException(PRODUCT_FILTER_NOT_FOUND);
        }
        PlantInfo plant = PlantInfo.builder()
                .name(spr.getPlantName())
                .tonicPeriod(spr.getTonic())
                .size(spr.getSize())
                .place(spr.getPlace())
                .eatable(spr.getEatable())
                .build();

        PlantInfo newPlant = plantyInfoRepository.save(plant);
        SubscribeProduct subscribeProduct = SubscribeProduct.builder()
                .plantInfoIdx(newPlant)
                .gid(gm)
                .name(spr.getProductName())
                .period(spr.getPeriod())
                .consultingCnt(spr.getConsultingCnt())
                .thumbnail(spr.getThumbnail())
                .description(spr.getDescription())
                .level(spr.getLevel())
                .price(spr.getPrice())
                .build();
        subscribeProductRepository.save(subscribeProduct);

        return false;
    }
}