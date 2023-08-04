package com.planty.api.user.model.service;

import com.planty.api.user.model.request.SocialLoginRequest;
import com.planty.api.user.model.request.UserJoinRequest;
import com.planty.api.user.model.response.*;
import com.planty.common.enums.UserType;
import com.planty.common.exception.handler.NotFoundException;
import com.planty.db.entity.UserInfo;
import com.planty.db.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserInfoServiceImpl implements UserInfoService {

    private final List<SocialLoginService> loginServices;
    private final UserInfoRepository userRepository;
    public LoginResponse doSocialLogin(SocialLoginRequest request) {
        SocialLoginService loginService = this.getLoginService(request.getUserType());

        SocialAuthResponse socialAuthResponse = loginService.getAccessToken(request.getCode());

        SocialUserResponse socialUserResponse = loginService.getUserInfo(socialAuthResponse.getAccess_token());
        log.info("socialUserResponse {} ", socialUserResponse.toString());

        if (userRepository.findByEmail(socialUserResponse.getEmail()).isEmpty()) {
            this.joinUser(
                    UserJoinRequest.builder()
                            .id(socialUserResponse.getId())
                            .email(socialUserResponse.getEmail())
                            .userType(request.getUserType())
                            .build()
            );
        }

        UserInfo user = userRepository.findByEmail(socialUserResponse.getEmail())
                .orElseThrow(() -> new NotFoundException("ERROR_001", "유저 정보를 찾을 수 없습니다."));

        return LoginResponse.builder()
                .id(user.getUid())
                .build();
    }

    private UserJoinResponse joinUser(UserJoinRequest userJoinRequest) {
        UserInfo user = userRepository.save(
                UserInfo.builder()
                        .id(userJoinRequest.getId())
                        .email(userJoinRequest.getEmail())
                        .userType(userJoinRequest.getUserType())
                        .build()
        );

        return UserJoinResponse.builder()
                .id(user.getUid())
                .build();
    }

    private SocialLoginService getLoginService(UserType userType){
        for (SocialLoginService loginService: loginServices) {
            if (userType.equals(loginService.getServiceName())) {
                log.info("login service name: {}", loginService.getServiceName());
                return loginService;
            }
        }
        return new LoginServiceImpl();
    }

    public UserResponse getUser(Long id) {
        UserInfo user = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("ERROR_001", "유저 정보를 찾을 수 없습니다."));

        return UserResponse.builder()
                .id(user.getUid())
                .email(user.getEmail())
                .userId(user.getId())
                .build();
    }

}
