package com.example.medichart.config;

import com.example.medichart.service.AdminUserService;
import com.example.medichart.service.OauthUserService;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
<<<<<<< HEAD
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
=======
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.util.Set;

@Configuration
public class SecurityConfig {

    @Autowired
    private AdminUserService adminUserService;

    @Autowired
    private OauthUserService oauthUserService;

    @Bean
<<<<<<< HEAD
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{

        http
                .csrf((auth) -> auth.disable());
        http
                .formLogin((auth) -> auth.disable());
        http
                .httpBasic((auth) -> auth.disable());
        http
                .oauth2Login((auth) -> auth
                       .loginPage("/login")
                        .userInfoEndpoint(userInfoEndpointConfig ->
                                userInfoEndpointConfig.userService(oauthUserService)));
        http
                .authorizeHttpRequests((auth) -> auth
                        .requestMatchers("/", "/oauth2/**", "/login/**").permitAll()
                        .anyRequest().authenticated());


        return http.build();
    }
=======
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf((csrf) -> csrf.disable())
                .authorizeHttpRequests((auth) -> auth
                        .requestMatchers("/", "/oauth2/**", "/login/**", "/signup", "/css/**", "/js/**").permitAll()
                        .requestMatchers("/admin/**").hasRole("ADMIN")
                        .anyRequest().authenticated())
                .oauth2Login((auth) -> auth
                        .loginPage("/login")
                        .userInfoEndpoint(userInfoEndpointConfig ->
                                userInfoEndpointConfig.userService(oauthUserService)))
                .formLogin((form) -> form
                        .loginPage("/login")
                        .successHandler(successHandler())
                        .permitAll())
                .logout((logout) -> logout
                        .permitAll());

        return http.build();
    }
    @Bean
    public AuthenticationSuccessHandler successHandler() {
        return new AuthenticationSuccessHandler() {
            @Override
            public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                                Authentication authentication) throws IOException, ServletException {
                Set<String> roles = AuthorityUtils.authorityListToSet(authentication.getAuthorities());
                if (roles.contains("ROLE_ADMIN")) {
                    response.sendRedirect("/admin/dashboard");
                } else {
                    response.sendRedirect("/dashboard");
                }
            }
        };
    }

    @Bean
    public UserDetailsService userDetailsService() {
        return adminUserService;
    }
<<<<<<< HEAD
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
}
=======
}
>>>>>>> 7be90e9e7fcc6022f2981703f3d35804ac79150e
