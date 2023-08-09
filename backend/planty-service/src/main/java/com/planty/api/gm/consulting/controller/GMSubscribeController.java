package com.planty.api.gm.consulting.controller;

import com.planty.api.gm.consulting.service.GMSubscribeService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequestMapping("/api/greenmates/subscribes")
@RequiredArgsConstructor
@Api
public class GMSubscribeController {

    private final GMSubscribeService gMSubscribeServiceImpl;

    @GetMapping
    public ResponseEntity<?> findSubscribeList() {
        return null;
    }


}
