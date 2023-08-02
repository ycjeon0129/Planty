package com.planty.api.user.controller;

import com.planty.common.auth.JwtProvider;
import com.planty.common.auth.MemberJwtContextHolder;
import com.planty.db.entity.UserInfo;
import com.planty.db.repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Duration;
import java.util.Collections;
import java.util.Optional;

@RestController
@RequestMapping(value = "/user/api")
public class UserInfoController {

    @Autowired
    UserInfoRepository userInfoRepository;

    private final JwtProvider jwtProvider;

    public UserInfoController(JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    @GetMapping("/auth/check")
    public Long check() {
        return MemberJwtContextHolder.getMemberJwtToken().getMemberId();
    }

    @GetMapping("/token")
    public String generateToken() throws Exception {
        return jwtProvider.generateAccessToken(Collections.singletonMap("member_id", "1"), Duration.ofMinutes(5));
    }


    @GetMapping("/{nickname}/{auth}")
    public ResponseEntity<?> signUp(@PathVariable("nickname") String nickname, @PathVariable("auth") String auth) {
        UserInfo userInfo = new UserInfo();
        userInfo.setAuth(auth);
        userInfo.setNickname(nickname);
        userInfo.setPhoto("phooto");
        userInfo.setShippingAddress("주소");
        userInfo.setEmail("dummy Email");
        System.out.println("user 들어옴");
        System.out.println("userVo.getNickname(): " + userInfo.getNickname() + " / userVo.getAuth(): " + userInfo.getAuth());
        userInfoRepository.save(userInfo);

        return new ResponseEntity<UserInfo>(userInfo, HttpStatus.OK);
    }

    @GetMapping("/{uid}")
    public ResponseEntity<?> userInfo(@PathVariable("uid") int uid) {
        Optional<UserInfo> userInfo = userInfoRepository.findById((long) uid);

        if(userInfo.isPresent()){
            return new ResponseEntity<UserInfo>(userInfo.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<UserInfo>(HttpStatus.NOT_FOUND);
        }
    }

}
