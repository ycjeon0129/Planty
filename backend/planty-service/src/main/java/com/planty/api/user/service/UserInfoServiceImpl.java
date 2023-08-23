package com.planty.api.user.service;

//import com.planty.api.user.model.request.SocialLoginRequest;
//import com.planty.api.user.model.request.TokenRefreshRequest;
import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
//import com.planty.api.user.request.GoogleLoginRequest;
import com.google.gson.Gson;
import com.planty.api.user.response.TokenInfoResponse;
import com.planty.api.user.response.UserInfoDetailResponse;
import com.planty.api.user.response.UserLoginResponse;
import com.planty.common.exception.handler.CustomException;
import com.planty.common.jwt.JwtProperties;
//import com.planty.common.jwt.JwtTokenProvider;
import com.planty.common.oauth.provider.GoogleUser;
import com.planty.common.oauth.provider.OAuthUserInfo;
import com.planty.common.util.SecurityUtil;
import com.planty.db.entity.UserInfo;
import com.planty.db.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

import static com.planty.common.exception.handler.ErrorCode.*;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional
public class UserInfoServiceImpl implements UserInfoService {

//    private final List<SocialLoginService> loginServices;
    private final UserInfoRepository userRepository;
//    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    @Value("${jwt.secret}")
    private String jwtSecret;

    @Override
    public UserLoginResponse jwtCreate(Map<String, Object> data) {
        log.info("jwtCreate 실행됨");
        HashMap<String, String> googleInfo = mapping(data);
//        OAuthUserInfo googleUser =
//                new GoogleUser((Map<String, Object>)data.get("profileObj"));
        String provider = "google";

        UserInfo userEntity =
                userRepository.findByUsername(provider+"_"+googleInfo.get("sub"));

        if(userEntity == null) {

//            if (providerId == null) {
//                providerId = UUID.randomUUID().toString().substring(0, 6);
//            }
            UserInfo userRequest = UserInfo.builder()
					.username(provider+"_"+googleInfo.get("sub"))
                    .password(bCryptPasswordEncoder.encode("planty202secret"))
                    .userEmail(googleInfo.get("email"))
                    .userType(provider)
                    .nickname(googleInfo.get("name"))
                    .role("ROLE_USER")
                    .build();

            userEntity = userRepository.save(userRequest);
        }

        String jwtToken = JWT.create()
                .withSubject(userEntity.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis()+ JwtProperties.EXPIRATION_TIME))
                .withClaim("uid", userEntity.getUid())
                .withClaim("email", userEntity.getUserEmail())
                .withClaim("emergencyCount", userEntity.getEmergencyCount())
//                .sign(Algorithm.HMAC512(JwtProperties.SECRET));
                .sign(Algorithm.HMAC512(jwtSecret));

        UserLoginResponse token = UserLoginResponse.builder()
                .jwtToken(jwtToken)
                .build();
        return token;
//        return null;
    }

    public HashMap<String, String> mapping(Map<String, Object> data) {
        HashMap<String, String> accountInfo = new HashMap<>();

                String origin = (String) ((Map<String, Object>) data.get("profileObj")).get("credential");
////        System.out.println(origin);
        Base64.Decoder decoder = Base64.getDecoder();
        String[] credential = origin.split("\\.");
        String jsonData = new String (decoder.decode(credential[1].replace('-', '+').replace('_', '/')));

        accountInfo = new Gson().fromJson(jsonData, HashMap.class);
//        System.out.println(val);

//        String[] lines = credential.split("_");
//        for (String line : lines) {
//            System.out.println(new String(decoder.decode(line)));
//        }
//        String payload = new String(decoder.decode(origin));
//        System.out.println(payload);


        return accountInfo;
    }



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
//                            .username(socialUserResponse.getName())
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

//    // 제대로 구현하면 private 이 되어야 함
//    public UserJoinResponse joinUser(UserJoinRequest userJoinRequest) {
//        UserInfo user = userRepository.save(
//                UserInfo.builder()
//                        .userId(userJoinRequest.getUserId())
//                        .userType(userJoinRequest.getUserType())
//                        .userEmail(userJoinRequest.getUserEmail())
//                        .username(userJoinRequest.getUsername())
//                        .build()
//        );
//
//        return UserJoinResponse.builder()
//                .id(user.getUid())
//                .build();
//    }

//    @Transactional
////    @Override
//    public TokenInfoResponse loginUser(String email) throws Exception {
//        UserInfo userInfo = userRepository.findByUserEmail(email)
//                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
////        UserLoginRequest loginInfo = new UserLoginRequest();
////        loginInfo = userInfo.getUserEmail();
//        log.info("UserInfoServiceImpl::loginUser::userInfo - before {}", userInfo);
//
//        if(userInfo == null) return null;
////        log.info("1");
////        // Long uid를 String으로 변환하여 토큰 발급에 사용
////        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userInfo.getUid()+"", password);
////        log.info("2 {}", authenticationToken);
////        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
////        log.info("3 {}", authentication);
//        // 비밀번호 없이 authentication 처리
////        List<GrantedAuthority> roles = new ArrayList<>(1);
////        String roleStr = userInfo.getUserEmail().equals("admin") ? "ROLE_ADMIN" : "ROLE_GUEST";
////        roles.add(new SimpleGrantedAuthority(roleStr));
//
////        Authentication authentication = new UsernamePasswordAuthenticationToken(userInfo, null, roles);
////        UsernameAuthenticationToken authenticationToken = new UsernameAuthenticationToken(userInfo.getUid().toString());
////        log.info("2 {}", authenticationToken);
////        UsernameAuthenticationProvider usernameAuthenticationProvider = new UsernameAuthenticationProvider();
////        Authentication authentication = usernameAuthenticationProvider.authenticate(authenticationToken);
////        log.info("3 {}", authentication);
////        TokenInfoResponse tokenInfo = jwtTokenProvider.generateToken(authentication);
//        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userInfo.getUserEmail(), userInfo.getPassword());
//        log.info("2 {}", authenticationToken);
//        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
//        log.info("3 {}", authentication);
//        TokenInfoResponse tokenInfo = jwtTokenProvider.generateToken(authentication);
//        log.info("UserInfoServiceImpl::loginUser::tokenInfo {}", tokenInfo);
//        // RefreshToken DB에 저장
//        userInfo.setToken(tokenInfo.getRefreshToken());
//        log.info("UserInfoServiceImpl::loginUser::userInfo {} - after", userInfo);
////        tokenInfo.setUid(userInfo.getUid());
//        return tokenInfo;
//    }

//    @Override
//    public UserResponse getUser(String email) throws Exception {
//        UserInfo user = userRepository.findByUserEmail(email)
//                .orElseThrow(() -> new NotFoundException("ERROR_001", "유저 정보를 찾을 수 없습니다."));
//        return UserResponse.builder()
//                .uid(user.getUid())
//                .userId(user.getUserId())
//                .username(user.getUsername())
//                .userEmail(user.getUserEmail())
//                .emergencyCount(user.getEmergencyCount())
//                .shippingAddress(user.getShippingAddress())
//                .build();
//    }

//    public UserLoginResponse getLoginUser(String email) throws Exception {
//        UserInfo user = userRepository.findByUserEmail(email)
//                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
//        return UserLoginResponse.builder()
//                .uid(user.getUid())
//                .userEmail(user.getUserEmail())
//                .build();
//    }

////    @Override
//    public TokenInfoResponse refreshUser(String accessToken, String refreshToken) throws Exception {
//        log.info("serviceImpl::refreshUser - accessToken {}", accessToken);
//        log.info("serviceImpl::refreshUser - refreshToken {}", refreshToken);
//        // RefreshToken Validate
//        if(refreshToken != null && jwtTokenProvider.validateToken(refreshToken)) {
//            // 저장된 refreshToken과 동일한지 체크
////            UserInfo userInfo = userRepository.findByUserEmail(token.getEmail())
//            log.info("get uid using jwt :: {}", jwtTokenProvider.getAuthentication(accessToken).getName());
////            UserInfo userInfo = userRepository.findByUid(token.getUid())
//            UserInfo userInfo = userRepository.findByUid(Long.parseLong(jwtTokenProvider.getAuthentication(accessToken).getName()))
//                    .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
//            if(refreshToken.equals(userInfo.getToken())) {
//                // Access 토큰 새로 생성
//                // Long uid를 String으로 변환하여 토큰 발급에 사용
////                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userInfo.getUid()+"", password);
//////                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userInfo.getUserEmail(), password);
////                Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
////
////
//////                List<GrantedAuthority> roles = new ArrayList<>(1);
//////                String roleStr = userInfo.getUserEmail().equals("admin") ? "ROLE_ADMIN" : "ROLE_GUEST";
//////                roles.add(new SimpleGrantedAuthority(roleStr));
//////
//////                Authentication authentication = new UsernamePasswordAuthenticationToken(userInfo, null, roles);
////                TokenInfoResponse tokenInfo = jwtTokenProvider.generateToken(authentication);
//                UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userInfo.getUserEmail(), userInfo.getPassword());
//                Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
//                TokenInfoResponse tokenInfo = jwtTokenProvider.refresh(authentication, userInfo.getToken());
//
//                return tokenInfo;
//            } else {
//                log.info("refreshToken이 다릅니다.");
//                return null;
//            }
//        } else {
//            // RefreshToken도 만료된 경우
//            log.info("refreshToken이 만료되었습니다.");
//            return null;
//        }
//    }

    public void logout() {
        String email = SecurityUtil.getCurrentUserEmail();
        UserInfo userInfo = userRepository.findByUserEmail(email)
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        // Refresh Token 제거
        userInfo.setToken(null);
    }

    public UserInfoDetailResponse findUserInfoDetail(Long uid) {
        UserInfo userInfo = userRepository.findByUid(uid)
//                .orElseThrow(() -> new NullPointerException(ExceptionHandler(USER_NOT_FOUND)));
                .orElseThrow(() -> new CustomException(USER_NOT_FOUND));
        String joinDate = userInfo.getJoinDate().toLocalDate().toString();
        return UserInfoDetailResponse.builder()
                .userId(userInfo.getNickname())
                .username(userInfo.getUsername())
                .email(userInfo.getUserEmail())
                .photo(userInfo.getPhoto())
                .joinDate(joinDate)
                .emergencyCount(userInfo.getEmergencyCount())
                .shipping_address(userInfo.getShippingAddress())
                .build();
    }




////    private SocialLoginService getLoginService(UserType userType){
////        for (SocialLoginService loginService: loginServices) {
////            if (userType.equals(loginService.getServiceName())) {
////                log.info("login service name: {}", loginService.getServiceName());
////                return loginService;
////            }
////        }
////        return new LoginServiceImpl();
////    }
//
//    public UserResponse getUser(Long id) {
//        UserInfo user = userRepository.findById(id)
//                .orElseThrow(() -> new NotFoundException("ERROR_001", "유저 정보를 찾을 수 없습니다."));
//
//        return UserResponse.builder()
//                .id(user.getUid())
//                .userId(user.getUserId())
//                .userEmail(user.getUserEmail())
//                .username(user.getUsername())
//                .build();
//    }

}
