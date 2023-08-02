package com.planty.common.auth;

import com.nimbusds.jose.JOSEObjectType;
import com.nimbusds.jose.JWSAlgorithm;
import com.nimbusds.jose.JWSHeader;
import com.nimbusds.jose.JWSSigner;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;

import java.time.Duration;
import java.time.Instant;
import java.util.Collections;
import java.util.Date;
import java.util.Map;

public class JwtProvider {

    public static final String SCOPE_ACCESS = "acc";
    public static final String SCOPE_REFRESH = "ref";

    private final String secretKey;

    public JwtProvider(String secretKey) {
        this.secretKey = secretKey;
    }

    public String generateAccessToken(Map<String, Object> claims, Duration expirationTime) throws Exception {
        return generateToken(claims, expirationTime, SCOPE_ACCESS);
    }

    public String generateRefreshToken(Duration expirationTime) throws Exception {
        return generateToken(Collections.emptyMap(), expirationTime, SCOPE_REFRESH);
    }

    private String generateToken(Map<String, Object> claims, Duration expirationTime, String jti) throws Exception {
        JWSSigner signer = new MACSigner(secretKey);

        JWTClaimsSet.Builder builder = new JWTClaimsSet.Builder();

        for (String key : claims.keySet()) {
            builder.claim(key, claims.get(key));
        }

        JWTClaimsSet claimsSet = builder
                .expirationTime(expirationTime == null ? null : Date.from(Instant.now().plus(expirationTime)))
                .issueTime(new Date())
                .claim("scp", jti)
                .build();
        SignedJWT signedJWT = new SignedJWT(new JWSHeader.Builder(JWSAlgorithm.HS256)
                .type(JOSEObjectType.JWT)
                .build(), claimsSet);
        signedJWT.sign(signer);

        return signedJWT.serialize();
    }
}
