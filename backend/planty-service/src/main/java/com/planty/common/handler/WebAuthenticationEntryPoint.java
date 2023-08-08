package com.planty.common.handler;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class WebAuthenticationEntryPoint implements AuthenticationEntryPoint{

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException) throws IOException, ServletException {
        log.info("Exceiption : {}",authException);
        log.info("LocalizedMessage : {}",authException.getLocalizedMessage());
        log.info("Message : {}",authException.getMessage());
        log.info("StackTrace : {}",authException.getStackTrace());

        request.setAttribute("msg", "로그인이 필요한 화면입니다.");
        request.getRequestDispatcher("/").forward(request, response);
    }

}
