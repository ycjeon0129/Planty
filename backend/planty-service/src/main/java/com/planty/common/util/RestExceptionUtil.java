package com.planty.common.util;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class RestExceptionUtil {

    public static ResponseEntity<Map<String, String>> messageHandling(String msg, HttpStatus status) {
        Map<String, String> map = new HashMap<>();
        map.put("msg", msg);
        return new ResponseEntity<>(map, status);
    }
}
