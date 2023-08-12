//package com.planty.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//public class WebConfig implements WebMvcConfigurer {
//    @Override
//    public void addCorsMappings(CorsRegistry corsRegistry) {
//        corsRegistry.addMapping("/**")
//                .allowedOrigins("http://localhost:3000")
//                .allowedOrigins("http://i9c202.p.ssafy.io")
//                .allowedOrigins("i9c202.p.ssafy.io")
//                .allowedOrigins("http://i9c202.p.ssafy.io:3000")
//                .allowedOrigins("i9c202.p.ssafy.io:3000")
//                .allowedMethods("GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS")
//                .allowCredentials(true)
//                .allowedHeaders("AxiosHeaders")
//                .maxAge(3600);
//    }
//}
