package com.planty.common.exception.handler;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

@Data
@AllArgsConstructor
public class ErrorResponse {
    private Integer statusCode;
    private String message;

    public ErrorResponse(Date timestamp, int code, String message) {
        super();
        this.statusCode = code;
        this.message = message;
    }

}