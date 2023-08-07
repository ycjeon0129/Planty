//package com.planty.common.auth;
//
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.oauth2.jwt.Jwt;
//import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
//
//import java.util.Collection;
//
//
//public class UserInfoJwtToken extends JwtAuthenticationToken {
//
//    private final Long userInfoId;
//
//    public UserInfoJwtToken(Jwt jwt, Collection<? extends GrantedAuthority> authorities) {
//        super(jwt, authorities);
//        this.userInfoId = Long.valueOf(jwt.getClaimAsString("userInfo_id"));
//    }
//
//    public Long getUserInfoId() {
//        return userInfoId;
//    }
//}
