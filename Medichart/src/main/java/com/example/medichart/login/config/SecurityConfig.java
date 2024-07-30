package com.example.medichart.login.config;


import com.example.medichart.login.service.mail.CustomUserDetailsService;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.Collections;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    // SecurityFilterChain을 정의합니다.
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // CSRF 보호를 비활성화합니다. 이는 클라이언트와 서버 간의 테스트에서 유용할 수 있지만, 실제 환경에서는 활성화하는 것이 좋습니다.
                .authorizeRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/api/users/register", "/api/users/verify-email", "/api/users/login").permitAll()
                                .requestMatchers("/ws/**", "/user/**", "/admin/**").permitAll()
                                .anyRequest().authenticated()  // 나머지 요청은 인증이 필요합니다.
                )
                .formLogin(formLogin ->
                        formLogin
                                .loginProcessingUrl("/api/users/login") // 로그인 경로를 설정합니다. 이 경로로 POST 요청이 들어오면 인증을 시도합니다.
                                .successHandler((request, response, authentication) -> {
                                    response.setStatus(HttpServletResponse.SC_OK);
                                    response.setContentType("application/json");
                                    response.getWriter().write("{\"status\":\"success\",\"message\":\"로그인 성공\"}");  // 로그인 성공 시 응답을 정의합니다.
                                })
                                .failureHandler((request, response, exception) -> {
                                    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
                                    response.setContentType("application/json");
                                    response.getWriter().write("{\"status\":\"failed\",\"message\":\"" + exception.getMessage() + "\"}");
                                    exception.printStackTrace(); // 예외를 로그에 기록합니다.
                                })
                                .permitAll()  // 로그인 페이지에 대한 접근을 허용합니다.
                )
                .logout(logout ->
                        logout
                                .logoutUrl("/api/users/logout") // 로그아웃 경로를 설정합니다.
                                .logoutSuccessHandler((request, response, authentication) -> {
                                    response.setStatus(HttpServletResponse.SC_OK);
                                })
                                .permitAll()  // 로그아웃 페이지에 대한 접근을 허용합니다.
                )
                .sessionManagement(sessionManagement ->
                        sessionManagement
                                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)  // 세션 생성 정책을 설정합니다. 필요 시 세션을 생성합니다.
                                .sessionFixation().none()  // 세션 고정 공격 방지를 위해 세션 고정 정책을 없앱니다.
                );

        return http.build();  // 설정을 적용하여 SecurityFilterChain을 빌드합니다.
    }


    // AuthenticationManager 빈을 설정합니다.
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
                .build();  // AuthenticationManager를 빌드하여 반환합니다.
    }

    // PasswordEncoder 빈을 설정합니다.
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // BCryptPasswordEncoder를 사용하여 비밀번호를 암호화합니다.
    }
}