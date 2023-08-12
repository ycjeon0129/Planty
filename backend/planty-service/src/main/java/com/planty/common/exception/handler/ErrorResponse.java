package com.planty.common.exception.handler;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class ErrorResponse {
    private Integer status;
    private String message;

    public ErrorResponse(int code, String message) {
        super();
        this.status = code;
        this.message = message;
    }
}