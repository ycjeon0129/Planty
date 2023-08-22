package com.planty.config;

////import com.planty.common.auth.PrincipalOauth2UserService;
//import com.planty.common.handler.WebAccessDeniedHandler;
//import com.planty.common.handler.WebAuthenticationEntryPoint;
//import com.planty.common.jwt.JwtAuthenticationFilter;
//import com.planty.common.jwt.JwtTokenProvider;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.autoconfigure.condition.ConditionalOnWebApplication;
//import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
////import com.travelers.common.filter.JwtAuthenticationFilter;
////import com.travelers.common.handler.WebAccessDeniedHandler;
////import com.travelers.common.handler.WebAuthenticationEntryPoint;
////import com.travelers.common.provider.JwtTokenProvider;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.cors.CorsConfigurationSource;
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//
//import java.util.Arrays;
//
//@Configuration
//@EnableWebSecurity
//@RequiredArgsConstructor
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
////public class WebSecurityConfig {
//
//    private final JwtTokenProvider jwtTokenProvider;
//    private final WebAccessDeniedHandler webAccessDeniedHandler;
//    private final WebAuthenticationEntryPoint webAuthenticationEntryPoint;
////    @Autowired
////    private PrincipalOauth2UserService principalOauth2UserService;
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//
//        http.csrf().disable();
//        http.authorizeRequests()
//                .antMatchers("/api/users/**").authenticated()
//                .antMatchers("/api/greenmates/join", "/api/greenmates/login").permitAll()
//                .antMatchers("/api/greenmates/**").hasRole("GM")
//                .anyRequest().permitAll()
//                .and()					//추가
//                .formLogin()				// form기반의 로그인인 경우
////                .loginPage("/loginForm")		// 인증이 필요한 URL에 접근하면 /loginForm으로 이동 \\ 적용 고민
//                .usernameParameter("id")		// 로그인 시 form에서 가져올 값(id, email 등이 해당)
//                .passwordParameter("pw")		// 로그인 시 form에서 가져올 값
//                .loginProcessingUrl("/login")		// 해당 URL 접근 시 시큐리티가 처리해줌
////                .defaultSuccessUrl("/")			// 로그인 성공하면 "/" 으로 이동   \\ 커스텀 고려
////                .failureUrl("/loginForm")		//로그인 실패 시 /loginForm으로 이동  \\ 커스텀 고려
//                /*
//                .and()
//                .logout()					// logout할 경우
//                .logoutUrl("/logout")			// 로그아웃을 처리할 URL 입력 \\ 커스텀 고려
//                .logoutSuccessUrl("/");			// 로그아웃 성공 시 "/"으로 이동
//                 */
////                .and()					//추가
////                    .oauth2Login()				// OAuth2기반의 로그인인 경우
////                    .userInfoEndpoint()			// 로그인 성공 후 사용자정보를 가져온다
////                    .userService(principalOauth2UserService)	//사용자정보를 처리할 때 사용한다
//        ;
//    }
//
////    @Bean
////    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
////        http
////                // 기본 보안 금지
////                .httpBasic().disable()
////                .csrf().disable()
////                // 세션 금지
////                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
////                .and()
////                .cors().disable()
////                .authorizeRequests()
////                // 로그인, 회원 가입 관련 요청 허용
////                .antMatchers("/api/users/tmp/**", "/api/users/refresh/**").permitAll()
////                .antMatchers(HttpMethod.POST, "/api/users").permitAll()
////                .antMatchers("/api/**").permitAll()
////
//////            .antMatchers("/", "/js/**", "/assets/**").permitAll()
//////            .antMatchers("/user/**", "/", "/js/**", "/assets/**").permitAll()
////
//////                .antMatchers("/article/**").permitAll()
////                // Swagger 허용
////                .mvcMatchers("/v2/api-docs", "/swagger*/**", "/webjars/**").permitAll()
//////            .antMatchers("/**").permitAll()
//////            .antMatchers("/user/test").hasRole("USER")
////                .anyRequest().authenticated()
////                // 핸들러 처리
////                .and()
////                .exceptionHandling()
////                .authenticationEntryPoint(webAuthenticationEntryPoint)
////                .accessDeniedHandler(webAccessDeniedHandler)
////                .and()
////                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
////        return http.build();
////    }
//
//    @Bean
//    public PasswordEncoder passwordEncoder() {
//        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//    }
//}
