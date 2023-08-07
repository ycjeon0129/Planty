package com.planty.api.subscribe.service;

import com.planty.api.subscribe.response.UserSubscribeDatailResponse;
import com.planty.api.subscribe.response.UserSubscribeResponse;

import java.util.List;

public interface SubscribeService {
    List<UserSubscribeResponse> getUserSubscribe(String userId);
    UserSubscribeDatailResponse getUserSubscribeDetail(String userId, Integer sid);
}
