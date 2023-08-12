package com.planty.api.subscribeProduct.service;

import com.planty.api.consulting.response.UserConsultingResponse;
import com.planty.api.subscribeProduct.response.SubscribeProductDetailResponse;
import com.planty.api.subscribeProduct.response.SubscribeProductResponse;

import java.util.List;
public interface SubscribeProductService {
    List<SubscribeProductResponse> getSubscribeProduct(int size, int place, int eatable);
    SubscribeProductDetailResponse getSubscribeProductDetail(Long spid);
}
