package com.planty.common.auth;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;

import java.util.Collection;

// JwtAuthenticationConverter의 기본 형식인 Jwt를 AbstractAuthenticationToken로 변환하는 Converter를 상속
public abstract class SimpleJwtAuthenticationConverter
        implements Converter<Jwt, AbstractAuthenticationToken> {

    // 기본 동작은 JwtAuthenticationConverter로 구현 -> 필드에 생성
    private final JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();

    // convert() 구현. final로 선언해 재정의 방지
    @Override
    public final AbstractAuthenticationToken convert(Jwt jwt) {
        // JwtAuthenticationConverter를 사용하여 AbstractAuthenticationToken로 변환
        AbstractAuthenticationToken token = jwtAuthenticationConverter.convert(jwt);
        Collection<GrantedAuthority> authorities = token.getAuthorities();
        // Jwt와 GrantedAuthority목록을 넘겨 하위 클래스에서 구현
        // 클래스 구현체는 Jwt와 GrantedAuthority목록을 사용하여 AbstractAuthenticationToken를 생성할 수 있음
        return convert(jwt, authorities);
    }

    public abstract AbstractAuthenticationToken convert(Jwt jwt, Collection<GrantedAuthority> authorities);

}