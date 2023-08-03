package com.planty.api.embedded.controller;

import lombok.RequiredArgsConstructor;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;

import com.planty.api.subscribe.response.FindSubscribeResponse;
import com.planty.api.subscribe.service.SubscribeService;
import static com.planty.common.util.LogCurrent.*;


@RestController
@Slf4j
@RequestMapping("/embedded")
public class EmbeddedController {
    @PostMapping
    public ResponseEntity<?> psRegister(@RequestBody String student) {
        System.out.println(student);
        ResponseEntity res = ResponseEntity.ok().body(student);
        return res;
    }

    @ToString
    public static class Student{
        String name;
        int age;
    }
}

