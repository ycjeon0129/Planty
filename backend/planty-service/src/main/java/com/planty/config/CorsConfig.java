package com.planty.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("http://localhost:3000"); // Access-Control-Allow-Origin  (Response에 자동으로 추가해줌)
        config.addAllowedHeader("*");  // Access-Control-Request-Headers
        config.addAllowedMethod("*"); // Access-Control-Request-Method

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("http://localhost:5000", "http://localhost:3000", "http://localhost:3001", "http://localhost:8443",
//                        "https://i9c202.p.ssafy.io", "https://i9c202.p.ssafy.io:8008", "https://i9c202.p.ssafy.io:3000", "https://i9c202.p.ssafy.io:3001", "https://i9c202.p.ssafy.io:8443", "https://i9c202.p.ssafy.io:443", "https://i9c202.p.ssafy.io:5001",
//                        "http://i9c202.p.ssafy.io", "http://i9c202.p.ssafy.io:8008", "http://i9c202.p.ssafy.io:3000", "http://i9c202.p.ssafy.io:3001", "http://i9c202.p.ssafy.io:8443", "http://i9c202.p.ssafy.io:5001")
//                .allowedMethods(HttpMethod.GET.name(), HttpMethod.POST.name(), HttpMethod.PUT.name(),
//                        HttpMethod.DELETE.name(), HttpMethod.HEAD.name(), HttpMethod.OPTIONS.name(),
//                        HttpMethod.PATCH.name())
//                .allowCredentials(true)
//                .maxAge(1800);
//    }

}
