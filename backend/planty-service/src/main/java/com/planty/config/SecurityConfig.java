//package com.planty.config;
//
////import com.planty.api.user.model.service.CustomOAuth2UserService;
////import com.planty.common.oauth2.OAuth2AuthenticationFailureHandler;
////import com.planty.common.oauth2.OAuth2AuthenticationSuccessHandler;
////import com.planty.common.oauth2.jwt.JwtAuthenticationFilter;
////import com.planty.common.oauth2.jwt.JwtTokenProvider;
////import com.planty.db.repository.CookieAuthorizationRequestRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
//import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.Arrays;
//
////import static org.springframework.security.config.Customizer.withDefaults;
//
//@RequiredArgsConstructor
//@EnableWebSecurity
//@Configuration
////@Configuration(proxyBeanMethods = false)
////@ConditionalOnDefaultWebSecurity
////@ConditionalOnWebApplication(type = ConditionalOnWebApplication.Type.SERVLET)
////@EnableGlobalMethodSecurity(prePostEnabled = true) // 특정 주소로 접근하면 권한 및 인증을 미리 체크
//// https://velog.io/@hong1008/spring-oauth-jwt - JwtDecoder
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
////    private final CustomOAuth2UserService customOAuth2UserService;
////    private final JwtTokenProvider jwtTokenProvider;
////    private final CookieAuthorizationRequestRepository cookieAuthorizationRequestRepository;
////    private final OAuth2AuthenticationSuccessHandler oAuth2AuthenticationSuccessHandler;
////    private final OAuth2AuthenticationFailureHandler oAuth2AuthenticationFailureHandler;
//
//
//    @Override
//    public void configure(WebSecurity web) throws Exception {
////        web.ignoring().antMatchers("/css/**", "/js/**");
//        web.ignoring().antMatchers("/.well-known/*");   // SSL 발급을 위한 인증 파일 경로
//    }
//
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http
//                .csrf().disable()// 세션을 사용하지 않고 JWT 토큰을 활용하여 진행, csrf토큰검사를 비활성화
//                .cors()
//                .and()
//                .authorizeRequests() // 인증절차에 대한 설정을 진행
////                .antMatchers("/", "/error/*", "/login", "/loginProc").permitAll() // 설정된 url은 인증되지 않더라도 누구든 접근 가능
//                .antMatchers("/api/*").permitAll()
////                .anyRequest().authenticated()// 위 페이지 외 인증이 되어야 접근가능(ROLE에 상관없이)
//                .and()
////                .formLogin().loginPage("/login")  // 접근이 차단된 페이지 클릭시 이동할 url
////                .loginProcessingUrl("/loginProc") // 로그인시 맵핑되는 url
////                .usernameParameter("userId")      // view form 태그 내에 로그인 할 id 에 맵핑되는 name ( form 의 name )
////                .passwordParameter("userPw")      // view form 태그 내에 로그인 할 password 에 맵핑되는 name ( form 의 name )
////                .successHandler(successHandlerHandler()) // 로그인 성공시 실행되는 메소드
////                .failureHandler(failureHandlerHandler()) // 로그인 실패시 실행되는 메소드
////                .permitAll()
////                .and()
//                .logout() // 로그아웃 설정
//                .logoutUrl("/logout") // 로그아웃시 맵핑되는 url
//                .logoutSuccessUrl("/") // 로그아웃 성공시 리다이렉트 주소
//                .invalidateHttpSession(true); // 세션 clear
//    }
////
////    @Bean
////    CorsConfigurationSource corsConfigurationSource(){
////        CorsConfiguration configuration = new CorsConfiguration();
////        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
////        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"));
////        configuration.setAllowedHeaders(Arrays.asList("AxiosHeaders"));
////        configuration.setAllowCredentials(true);
////        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
////        source.registerCorsConfiguration("/**", configuration);
////        return source;
////    }
//
//
////    @Bean
////    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////        //httpBasic, csrf, formLogin, rememberMe, logout, session disable
////        http
////                .cors().disable()
////                .httpBasic().disable()
////                .csrf().disable()
////                .formLogin().disable()
////                .rememberMe().disable()
////                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
////
////        //요청에 대한 권한 설정
////        http.authorizeRequests()
////                .antMatchers(("/**")).permitAll()
////                .antMatchers("/").permitAll()
////                .antMatchers("/oauth2/**").permitAll()
////                .anyRequest().authenticated();
////
////        //oauth2Login
//////        http.oauth2Login()
//////                .authorizationEndpoint().baseUri("/oauth2/authorize")  // 소셜 로그인 url
//////                .authorizationRequestRepository(cookieAuthorizationRequestRepository)  // 인증 요청을 cookie 에 저장
//////                .and()
//////                .redirectionEndpoint().baseUri("/oauth2/callback/*")  // 소셜 인증 후 redirect url
//////                .and()
//////                //userService()는 OAuth2 인증 과정에서 Authentication 생성에 필요한 OAuth2User 를 반환하는 클래스를 지정한다.
//////                .userInfoEndpoint().userService(customOAuth2UserService)  // 회원 정보 처리
//////                .and()
//////                .successHandler(oAuth2AuthenticationSuccessHandler)
//////                .failureHandler(oAuth2AuthenticationFailureHandler);
////
////        http.logout()
////                .clearAuthentication(true)
////                .deleteCookies("JSESSIONID");
////
////        //jwt filter 설정
//////        http.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
////
////        return http.build();
////    }
//}