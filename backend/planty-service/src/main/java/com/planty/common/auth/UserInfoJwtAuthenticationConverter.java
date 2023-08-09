//package com.planty.common.auth;
//
//import org.springframework.security.authentication.AbstractAuthenticationToken;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.oauth2.jwt.Jwt;
//import org.springframework.stereotype.Component;
//
//import java.util.Collection;
//
//@Component
//public class UserInfoJwtAuthenticationConverter extends SimpleJwtAuthenticationConverter {
//
//    @Override
//    public AbstractAuthenticationToken convert(Jwt jwt, Collection<GrantedAuthority> authorities) {
//        return new UserInfoJwtToken(jwt, authorities);    // 프로젝트에서 사용할 Jwt토큰 객체를 생성하여 사용
//    }
//
//}
