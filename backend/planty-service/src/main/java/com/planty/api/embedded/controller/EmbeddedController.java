package com.planty.api.embedded.controller;

import io.swagger.annotations.Api;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;


@RestController
@Slf4j
@RequestMapping("/embedded")
@Api
public class EmbeddedController {
    @PostMapping
    public ResponseEntity<?> psRegister(Student student) {
        System.out.println(student);
        return ResponseEntity.ok().body(student);
    }

    @ToString
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Student{
        String name;
        int age;
    }
}

