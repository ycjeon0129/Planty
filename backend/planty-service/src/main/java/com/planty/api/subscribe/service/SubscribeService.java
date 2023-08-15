package com.planty.api.subscribe.service;

import com.planty.api.subscribe.request.UserSubscribeRequest;
import com.planty.api.subscribe.response.UserSubscribeDetailResponse;
import com.planty.api.subscribe.response.UserSubscribeResponse;
import com.planty.db.entity.UserSubscribe;

import java.text.ParseException;
import java.util.List;

public interface SubscribeService {
    List<UserSubscribeResponse> getUserSubscribe(int done) throws ParseException;
    UserSubscribeDetailResponse getUserSubscribeDetail(Long sid);
    boolean regUserSubscribe (UserSubscribeRequest userSubscribeRequest);

    boolean deleteUserSubscribe(Long sid);
}
