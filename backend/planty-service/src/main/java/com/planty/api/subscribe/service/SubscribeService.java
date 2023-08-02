package com.planty.api.subscribe.service;

import com.planty.api.subscribe.response.FindSubscribeResponse;

import java.util.List;

public interface SubscribeService {
    List<FindSubscribeResponse> findAllSubscribe(Long userId);
}
