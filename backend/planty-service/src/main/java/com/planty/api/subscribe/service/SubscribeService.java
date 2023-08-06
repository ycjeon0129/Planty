package com.planty.api.subscribe.service;

import com.planty.api.subscribe.response.UserSubscribeResponse;

import java.util.List;

public interface SubscribeService {
    List<UserSubscribeResponse> getUserSubscribe(Integer userId);
}
