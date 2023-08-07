//package com.planty.common.auth;
//
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
//import org.springframework.security.oauth2.core.OAuth2Error;
//import org.springframework.security.oauth2.server.resource.BearerTokenErrors;
//import org.springframework.security.web.AuthenticationEntryPoint;
//
//import java.io.IOException;
//import java.nio.charset.Charset;
//
//public class CustomEntryPoint implements AuthenticationEntryPoint {
//
//    @Override
//    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException ex) throws IOException {
//
//        OAuth2Error error = ex instanceof OAuth2AuthenticationException ? // 에러 유형 판단. 대부분 invalidToken 리턴
//                ((OAuth2AuthenticationException) ex).getError() :
//                BearerTokenErrors.invalidToken(ex.getMessage());
//
//        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
//        response.setStatus(HttpStatus.UNAUTHORIZED.value());
//        response.setCharacterEncoding(Charset.defaultCharset().name());
//
//        response.getWriter().write(error.getErrorCode());
//        response.getWriter().flush();
//    }
//}
