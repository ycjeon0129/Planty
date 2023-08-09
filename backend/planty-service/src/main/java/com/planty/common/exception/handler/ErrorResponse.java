package com.planty.common.exception.handler;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.Date;

@Data
@RequiredArgsConstructor
public class ErrorResponse {
    private Integer statusCode;
    private String message;
    private Object resObject;

    public ErrorResponse(int code, String message) {
        super();
        this.statusCode = code;
        this.message = message;
    }
}