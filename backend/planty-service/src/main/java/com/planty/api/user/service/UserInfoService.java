package com.planty.api.user.service;

import com.planty.api.user.response.UserLoginResponse;

import java.util.Map;

public interface UserInfoService {

    UserLoginResponse jwtCreate(Map<String, Object> data);

}
