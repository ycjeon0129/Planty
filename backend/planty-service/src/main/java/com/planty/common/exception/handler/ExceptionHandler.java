package com.planty.common.exception.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.client.HttpClientErrorException;

import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;
import static org.springframework.http.HttpStatus.NOT_FOUND;

@Slf4j
@ControllerAdvice
public class ExceptionHandler {
    public static final String USER_NOT_FOUND = "존재하지 않는 회원입니다.";
    public static final String USER_SID_NOT_FOUND = "존재하지 않는 회원 구독 번호입니다.";
    public static final String PRODUCT_NOT_FOUND = "존재하지 않는 구독 상품입니다.";

    @org.springframework.web.bind.annotation.ExceptionHandler(NullPointerException.class)
    public ResponseEntity exNullHandle(NullPointerException e) {
        log.info("[exceptionHandle] {}",e.getMessage());
        return new ResponseEntity(new ErrorResponse(NOT_FOUND.value(), e.getMessage()), NOT_FOUND);
    }

//    @org.springframework.web.bind.annotation.ExceptionHandler(HttpClientErrorException.Forbidden.class)
//    public ResponseEntity exUnAuthHandle(HttpClientErrorException.Forbidden e) {
//        log.info("[exceptionHandle] {}",e.getMessage());
//        return new ResponseEntity(new ErrorResponse(FORBIDDEN.value(), "인증 권한 오류"), FORBIDDEN);
//    }

}