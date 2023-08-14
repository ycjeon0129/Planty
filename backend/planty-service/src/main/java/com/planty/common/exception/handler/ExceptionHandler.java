package com.planty.common.exception.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.client.HttpClientErrorException;

import static org.springframework.http.HttpStatus.*;

@Slf4j
@ControllerAdvice
public class ExceptionHandler {
    public static final String USER_NOT_FOUND = "존재하지 않는 회원입니다.";
    public static final String USER_SID_NOT_FOUND = "존재하지 않는 회원의 구독 번호입니다.";
    public static final String PRODUCT_NOT_FOUND = "존재하지 않는 구독 상품입니다.";
    public static final String TIME_NOT_FOUND = "존재하지 않는 시간입니다.";
    public static final String BOOKING_NOT_FOUND = "존재하지 않는 예약 번호입니다.";
    public static final String EMERGENCY_NOT_FOUND = "존재하지 않는 응급실 번호입니다.";
    public static final String PLANT_NOT_FOUND = "존재하지 않는 식물입니다.";
    public static final String GM_NOT_FOUND = "존재하지 않는 그린메이트입니다.";
    public static final String TICKET_PRODUCT_NOT_FOUND = "존재하지 않는 응급실 묶음상품입니다.";
    public static final String CONSULTING_SESSION_NOT_FOUND = "존재하지 않는 컨설팅 세션입니다.";
    public static final String CONSULTING_LOG_NOT_FOUND = "존재하지 않는 컨설팅 기록입니다.";
    public static final String EMERGENCY_SESSION_NOT_FOUND = "존재하지 않는 응급실 세션입니다.";

    // 403
    public static final String EMERGENCY_UNAUTHORIZED = "권한이 없는 응급실 세션입니다.";


    @org.springframework.web.bind.annotation.ExceptionHandler(NullPointerException.class)
    public ResponseEntity exNullHandle(NullPointerException e) {
        log.info("[exceptionHandle] {}",e.getMessage());
        return new ResponseEntity(new ErrorResponse(INTERNAL_SERVER_ERROR.value(), e.getMessage()), INTERNAL_SERVER_ERROR);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(IllegalAccessException.class)
    public ResponseEntity exNullHandle(IllegalAccessException e) {
        log.info("[exceptionHandle] {}",e.getMessage());
        return new ResponseEntity(new ErrorResponse(FORBIDDEN.value(), e.getMessage()), INTERNAL_SERVER_ERROR);
    }


}