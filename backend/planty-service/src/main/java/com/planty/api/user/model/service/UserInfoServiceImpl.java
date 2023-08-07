package com.planty.api.user.model.service;

//import com.planty.api.user.model.request.SocialLoginRequest;
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

//    private final List<SocialLoginService> loginServices;
    private final UserInfoRepository userRepository;
//    public LoginResponse doSocialLogin(SocialLoginRequest request) {
//        SocialLoginService loginService = this.getLoginService(request.getUserType());
//
//        SocialAuthResponse socialAuthResponse = loginService.getAccessToken(request.getCode());
//
//        SocialUserResponse socialUserResponse = loginService.getUserInfo(socialAuthResponse.getAccess_token());
//        log.info("socialUserResponse {} ", socialUserResponse.toString());
//
//        if (userRepository.findByUserEmail(socialUserResponse.getEmail()).isEmpty()) {
//            this.joinUser(
//                    UserJoinRequest.builder()
//                            .userId(socialUserResponse.getId())
//                            .userEmail(socialUserResponse.getEmail())
//                            .userName(socialUserResponse.getName())
//                            .userType(request.getUserType())
//                            .build()
//            );
//        }
//
//        UserInfo user = userRepository.findByUserEmail(socialUserResponse.getEmail())
//                .orElseThrow(() -> new NotFoundException("ERROR_001", "유저 정보를 찾을 수 없습니다."));
//
//        return LoginResponse.builder()
//                .id(user.getUid())
//                .build();
//    }

    // 제대로 구현하면 private 이 되어야 함
    public UserJoinResponse joinUser(UserJoinRequest userJoinRequest) {
        UserInfo user = userRepository.save(
                UserInfo.builder()
                        .userId(userJoinRequest.getUserId())
                        .userType(userJoinRequest.getUserType())
                        .userEmail(userJoinRequest.getUserEmail())
                        .userName(userJoinRequest.getUserName())
                        .build()
        );

        return UserJoinResponse.builder()
                .id(user.getUid())
                .build();
    }

//    private SocialLoginService getLoginService(UserType userType){
//        for (SocialLoginService loginService: loginServices) {
//            if (userType.equals(loginService.getServiceName())) {
//                log.info("login service name: {}", loginService.getServiceName());
//                return loginService;
//            }
//        }
//        return new LoginServiceImpl();
//    }

    public UserResponse getUser(Long id) {
        UserInfo user = userRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("ERROR_001", "유저 정보를 찾을 수 없습니다."));

        return UserResponse.builder()
                .id(user.getUid())
                .userId(user.getUserId())
                .userEmail(user.getUserEmail())
                .userName(user.getUserName())
                .build();
    }

}
