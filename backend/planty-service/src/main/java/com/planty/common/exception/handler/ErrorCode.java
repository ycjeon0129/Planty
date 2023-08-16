package com.planty.common.exception.handler;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {

    /* 403 FORBIDDEN : 페이지 접근 거부 */
    EMERGENCY_UNAUTHORIZED(HttpStatus.FORBIDDEN, "권한이 없는 응급실 세션입니다."),
    EMERGENCY_TICKET_NOT_ENOUGH(HttpStatus.FORBIDDEN, "사용자가 보유한 이용권 티켓이 부족합니다."),
    CONSULTING_UNAUTHORIZED(HttpStatus.FORBIDDEN, "권한이 없는 컨설팅 세션입니다."),
    CONSULTING_COUNT_NOT_ENOUGH(HttpStatus.FORBIDDEN, "사용자가 보유한 컨설팅 횟수가 부족합니다."),

    /* 404 NOT_FOUND : Resource 를 찾을 수 없음 */
    USER_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 회원입니다."),
    USER_SID_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 회원의 구독 번호입니다."),
    USER_CID_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 회원의 컨설팅 번호입니다"),
    PRODUCT_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 구독 상품입니다."),
    TIME_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 시간입니다."),
    BOOKING_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 예약 번호입니다."),
    EMERGENCY_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 응급실 번호입니다."),
    PLANT_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 식물입니다."),
    GM_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 그린메이트입니다."),
    TICKET_PRODUCT_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 응급실 묶음상품입니다."),
    CONSULTING_SESSION_NOT_FOUND (HttpStatus.NOT_FOUND, "존재하지 않는 컨설팅 세션입니다."),
    CONSULTING_LOG_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 컨설팅 기록입니다."),
    EMERGENCY_SESSION_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 응급실 세션입니다."),
    PRODUCT_FILTER_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 구독 상품 필터입니다."),

    /* 409 CONFLICT : Resource 의 현재 상태와 충돌. 보통 중복된 데이터 존재 */
    DUPLICATE_RESOURCE(HttpStatus.CONFLICT, "데이터가 이미 존재합니다"),
    CONSULTING_TIME_OCCUPIED(HttpStatus.CONFLICT, "다른 사용자가 이미 예약한 컨설팅 타임입니다."),
    EMERGENCY_ALREADY_EXIST(HttpStatus.CONFLICT, "이미 존재하는 응급실 세션 로그입니다."),
    CONSULTING_ALREADY_EXIST(HttpStatus.CONFLICT, "이미 존재하는 컨설팅 세션 로그입니다."),
    BOOKING_ALREADY_ACCESS(HttpStatus.CONFLICT, "이미 취소된, 실행된 예약입니다."),
    SUBSCRIBE_PRODUCT_ALREADY_EXIST(HttpStatus.CONFLICT, "이미 구독중인 상품입니다.");

    private final HttpStatus httpStatus;
    private final String description;

}