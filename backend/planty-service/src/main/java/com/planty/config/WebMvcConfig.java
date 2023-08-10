package com.planty.config;


import java.util.Arrays;
import java.util.List;

import com.planty.common.interceptor.AuthenticationInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

//import com.travelers.common.interceptor.AuthenticationInterceptor;
//import com.travelers.common.interceptor.ScheduleInterceptor;

import lombok.RequiredArgsConstructor;


@Configuration
@RequiredArgsConstructor
public class WebMvcConfig implements WebMvcConfigurer {

    private final AuthenticationInterceptor confirmInterceptor;
//    private final ScheduleInterceptor scheduleInterceptor;
    private final List<String> patterns = Arrays.asList("/api/**", "/mypage", "/search", "/schedule", "/hotplace");

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(confirmInterceptor).addPathPatterns(patterns);
//        registry.addInterceptor(scheduleInterceptor).addPathPatterns("/schedule", "/article/schedule/**", "/attraction/schedule/**");
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
		.allowedOrigins("http://localhost:5000", "http://localhost:3000", "http://localhost:3001",
                "https://i9c202.p.ssafy.io", "https://i9c202.p.ssafy.io:8008", "https://i9c202.p.ssafy.io:3000", "https://i9c202.p.ssafy.io:3001",
                "http://i9c202.p.ssafy.io", "http://i9c202.p.ssafy.io:8008", "http://i9c202.p.ssafy.io:3000", "http://i9c202.p.ssafy.io:3001")
                .allowedMethods(HttpMethod.GET.name(), HttpMethod.POST.name(), HttpMethod.PUT.name(),
                        HttpMethod.DELETE.name(), HttpMethod.HEAD.name(), HttpMethod.OPTIONS.name(),
                        HttpMethod.PATCH.name())
                .allowCredentials(true)
                .maxAge(1800);
    }

//    컨트롤러 클래스 없이 특정 view에대한 컨트롤러를 추가
//    @Override
//    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/hotplace").setViewName("/article/hotplaceWrite");
//    }
}

