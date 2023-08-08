package com.planty.api.user.model.service;

import com.planty.api.user.model.response.SocialAuthResponse;
import com.planty.api.user.model.response.SocialUserResponse;
import com.planty.common.enums.UserType;
import org.springframework.stereotype.Service;

@Service
public interface SocialLoginService {
    UserType getServiceName();
    SocialAuthResponse getAccessToken(String authorizationCode);
    SocialUserResponse getUserInfo(String accessToken);
}
