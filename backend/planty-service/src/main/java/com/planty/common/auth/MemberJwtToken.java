package com.planty.common.auth;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

import java.util.Collection;


public class MemberJwtToken extends JwtAuthenticationToken {

    private final Long memberId;

    public MemberJwtToken(Jwt jwt, Collection<? extends GrantedAuthority> authorities) {
        super(jwt, authorities);
        this.memberId = Long.valueOf(jwt.getClaimAsString("member_id"));
    }

    public Long getMemberId() {
        return memberId;
    }
}
