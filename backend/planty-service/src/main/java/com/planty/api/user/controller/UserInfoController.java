package com.planty.api.user.controller;

//import com.planty.common.auth.JwtProvider;
//import com.planty.common.auth.UserInfoJwtContextHolder;
import com.planty.api.user.model.request.SocialLoginRequest;
import com.planty.api.user.model.response.LoginResponse;
import com.planty.api.user.model.response.UserResponse;
//import com.planty.api.user.model.service.CustomOAuth2UserService;
import com.planty.api.user.model.service.UserInfoServiceImpl;
import com.planty.db.entity.UserInfo;
import com.planty.db.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;

import java.time.Duration;
import java.util.Collections;
import java.util.Optional;

@RestController
@RequestMapping(value = "/api/users")
@RequiredArgsConstructor
public class UserInfoController {

    private final UserInfoServiceImpl userService;

    @PostMapping("/social-login")
    public ResponseEntity<LoginResponse> doSocialLogin(@RequestBody @Valid SocialLoginRequest request) {

        return ResponseEntity.created(URI.create("/social-login"))
                .body(userService.doSocialLogin(request));
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUser(@PathVariable("id") Long id) {
        return ResponseEntity.ok(
                userService.getUser(id)
        );
    }

//    @Autowired
//    UserInfoRepository userInfoRepository;

//    @Autowired
//    CustomOAuth2UserService customOAuth2UserService;

//    private final JwtProvider jwtProvider;
//
//    public UserInfoController(JwtProvider jwtProvider) {
//        this.jwtProvider = jwtProvider;
//    }

//    @PostMapping("/oauth2/callback")
//    public ResponseEntity<LoginResponse> googleLogIn(@RequestBody String code) {
//        OAuth2UserRequest oAuth2UserRequest = new OAuth2UserRequest();
//        OAuth2User oAuth2User = null;
//
//        return null;
////        return ResponseEntity.created(URI.create("/social-login"))
////                .body(customOAuth2UserService.processOAuth2User(oAuth2UserRequest, oAuth2User));
//    }

//    @GetMapping("/auth/check")
//    public Long check() {
//        return UserInfoJwtContextHolder.getMemberJwtToken().getUserInfoId();
//    }
//
//    @GetMapping("/token")
//    public String generateToken() throws Exception {
//        return jwtProvider.generateAccessToken(Collections.singletonMap("member_id", "1"), Duration.ofMinutes(5));
//    }


//    @GetMapping("/{nickname}/{auth}")
//    public ResponseEntity<?> signUp(@PathVariable("nickname") String nickname, @PathVariable("auth") String auth) {
//        UserInfo userInfo = new UserInfo();
//        userInfo.setAuth(auth);
//        userInfo.setNickname(nickname);
//        userInfo.setPhoto("phooto");
//        userInfo.setShippingAddress("주소");
//        userInfo.setEmail("dummy Email");
//        System.out.println("user 들어옴");
//        System.out.println("userVo.getNickname(): " + userInfo.getNickname() + " / userVo.getAuth(): " + userInfo.getAuth());
//        userInfoRepository.save(userInfo);
//
//        return new ResponseEntity<UserInfo>(userInfo, HttpStatus.OK);
//    }
//
//    @GetMapping("/{uid}")
//    public ResponseEntity<?> userInfo(@PathVariable("uid") int uid) {
//        Optional<UserInfo> userInfo = userInfoRepository.findById((long) uid);
//
//        if(userInfo.isPresent()){
//            return new ResponseEntity<UserInfo>(userInfo.get(), HttpStatus.OK);
//        }
//        else{
//            return new ResponseEntity<UserInfo>(HttpStatus.NOT_FOUND);
//        }
//    }

}
