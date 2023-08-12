package com.planty.common.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class WebAccessDeniedHandler implements AccessDeniedHandler{

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response,
                       AccessDeniedException accessDeniedException) throws IOException, ServletException {
        log.info("Exceiption : {}",accessDeniedException);
        log.info("LocalizedMessage : {}",accessDeniedException.getLocalizedMessage());
        log.info("Message : {}",accessDeniedException.getMessage());
        log.info("StackTrace : {}",accessDeniedException.getStackTrace());

        request.setAttribute("msg", "로그인이 필요한 화면입니다.");
        request.getRequestDispatcher("/").forward(request, response);
    }
}

