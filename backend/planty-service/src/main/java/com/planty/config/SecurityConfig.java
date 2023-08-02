package com.planty.config;

import com.planty.common.auth.CustomAccessDeniedHandler;
import com.planty.common.auth.CustomEntryPoint;
import com.planty.common.auth.JwtProvider;
import com.planty.common.auth.SimpleJwtAuthenticationConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.access.expression.SecurityExpressionHandler;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.web.FilterInvocation;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.boot.autoconfigure.AutoConfigureAfter;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

import javax.crypto.spec.SecretKeySpec;

import static org.springframework.security.config.Customizer.withDefaults;

//import static org.springframework.security.config.Customizer.withDefaults;

@RequiredArgsConstructor
@EnableWebSecurity
//@Configuration
@Configuration(proxyBeanMethods = false)
@ConditionalOnDefaultWebSecurity
@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
@EnableGlobalMethodSecurity(prePostEnabled = true) // 특정 주소로 접근하면 권한 및 인증을 미리 체크
// https://velog.io/@hong1008/spring-oauth-jwt - JwtDecoder
public class SecurityConfig {

    @Value("${spring.security.secretKey}")
    private String secretKey;

    @Bean
    public SecurityFilterChain jwtChain(
            // Spring에서 권장하는 Method Bean 방식의 Security 설정 구성. HttpSecurity 객체를 주입 받아 SecurityFilterChain 객체를 작성
            HttpSecurity http,
            // Spring에서 기본으로 제공하는 JwtAuthenticationConverter 클래스에 커스텀 추가
            SimpleJwtAuthenticationConverter jwtAuthenticationConverter
    ) throws Exception {
        http
//            .securityMatcher("/api/**")
            // 경로 패턴에 인증을 부여합니다.
            // /auth/** 경로 접근은 SCOPE_acc 권한이 있어야만 접근 가능.
            // 토큰 Claim 중 scp의 값이 acc인 토큰만 사용가능
            .authorizeHttpRequests(authorizeRequests -> authorizeRequests
                .requestMatchers("/auth/**").hasAuthority("SCOPE_acc")
                .anyRequest().permitAll()
            )
            .oauth2ResourceServer(oauth2 -> oauth2
                .accessDeniedHandler(new CustomAccessDeniedHandler())   // AccessDeniedHandler 설정
                .authenticationEntryPoint(new CustomEntryPoint())   // AuthenticationEntryPoint 설정
                .jwt(jwt -> jwt // oauth2-jose 설정
                    .jwtAuthenticationConverter(jwtAuthenticationConverter) // JwtAuthenticationConverter 설정
                )
            );

        return http.build();
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        MacAlgorithm algorithm = MacAlgorithm.HS256;

        return NimbusJwtDecoder.withSecretKey(new SecretKeySpec(secretKey.getBytes(), algorithm.getName()))
                .macAlgorithm(algorithm)
                .build();
    }

    @Bean
    public JwtProvider jwtProvider() {
        return new JwtProvider(secretKey);
    }

//    private SecurityExpressionHandler<FilterInvocation> configExpressionHandler() {
//        /* ... */
//        return null;
//    }

////    private final CustomUserDetailsService customUserDetailsService;
////    private final CustomOAuth2UserService customOAuth2UserService;
//    private final CustomUserDetailsService myUserDetailsService;
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(customUserDetailsService).passwordEncoder(encoder());
//    }
//
//    @Override
//    public void configure(WebSecurity web) throws Exception {
//        web
//            .ignoring().antMatchers( "/css/**", "/js/**", "/img/**");
//    }
//
//    @Bean
//    @Order(SecurityProperties.BASIC_AUTH_ORDER)
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//        http
////            .csrf().disable()
//            .authorizeRequests()
//            .antMatchers("/", "/auth/**", "/posts/read/**", "/posts/search/**")
//            .permitAll()
//            .anyRequest()
//            .authenticated()
//            .and()
//            .formLogin()
//            .loginPage("/auth/login")
//            .loginProcessingUrl("loginProc")
//            .defaultSuccessUrl("/")
//            .and()
//            .logout()
//            .logoutSuccessUrl("/")
//            .invalidateHttpSession(true);
//        return http.build();
//    }
}
