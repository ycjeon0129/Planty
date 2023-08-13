package com.planty.config;


import com.planty.common.handler.WebAccessDeniedHandler;
import com.planty.common.handler.WebAuthenticationEntryPoint;
import com.planty.common.jwt.JwtAuthenticationFilter;
import com.planty.common.jwt.JwtTokenProvider;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

//import com.travelers.common.filter.JwtAuthenticationFilter;
//import com.travelers.common.handler.WebAccessDeniedHandler;
//import com.travelers.common.handler.WebAuthenticationEntryPoint;
//import com.travelers.common.provider.JwtTokenProvider;

import lombok.RequiredArgsConstructor;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

    private final JwtTokenProvider jwtTokenProvider;
    private final WebAccessDeniedHandler webAccessDeniedHandler;
    private final WebAuthenticationEntryPoint webAuthenticationEntryPoint;

//    @Bean
//    CorsConfigurationSource corsConfigurationSource() {
//        CorsConfiguration configuration = new CorsConfiguration();
//
//        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
//        configuration.setAllowedMethods(Arrays.asList("HEAD","POST","GET","DELETE","PUT"));
//        configuration.setAllowedHeaders(Arrays.asList("*"));
//        configuration.setAllowCredentials(true);
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/**", configuration);
//        return source;
//    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                // 기본 보안 금지
                .httpBasic().disable()
                .csrf().disable()
                // 세션 금지
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .cors().disable()
                .authorizeRequests()
                // 로그인, 회원 가입 관련 요청 허용
                .antMatchers("/api/users/tmp/**", "/api/users/refresh/**").permitAll()
                .antMatchers(HttpMethod.POST, "/api/users").permitAll()
                .antMatchers("/api/**").permitAll()

//            .antMatchers("/", "/js/**", "/assets/**").permitAll()
//            .antMatchers("/user/**", "/", "/js/**", "/assets/**").permitAll()

//                .antMatchers("/article/**").permitAll()
                // Swagger 허용
                .mvcMatchers("/v2/api-docs", "/swagger*/**", "/webjars/**").permitAll()
//            .antMatchers("/**").permitAll()
//            .antMatchers("/user/test").hasRole("USER")
                .anyRequest().authenticated()
                // 핸들러 처리
                .and()
                .exceptionHandling()
                .authenticationEntryPoint(webAuthenticationEntryPoint)
                .accessDeniedHandler(webAccessDeniedHandler)
                .and()
                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
