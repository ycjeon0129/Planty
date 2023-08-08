package com.planty.api.subscribe.service;

import com.planty.api.subscribe.request.UserSubscribeRequest;
import com.planty.api.subscribe.response.UserSubscribeDatailResponse;
import com.planty.api.subscribe.response.UserSubscribeResponse;

import java.util.List;

public interface SubscribeService {
    List<UserSubscribeResponse> getUserSubscribe(String userId);
    UserSubscribeDatailResponse getUserSubscribeDetail(String userId, Long sid);

//    UserSubscribeRequest regSubscribe (String userId, Long spid);
}
