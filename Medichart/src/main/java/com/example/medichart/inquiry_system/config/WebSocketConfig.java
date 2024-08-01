package com.example.medichart.inquiry_system.config;

import com.example.medichart.inquiry_system.config.handlers.AdminWebSocketHandler;
import com.example.medichart.inquiry_system.config.handlers.UserWebSocketHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;
import org.springframework.web.socket.server.support.HttpSessionHandshakeInterceptor;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    @Bean
    public UserWebSocketHandler userWebSocketHandler() {
        return new UserWebSocketHandler();
    }

    @Bean
    public AdminWebSocketHandler adminWebSocketHandler() {
        return new AdminWebSocketHandler();
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(userWebSocketHandler(), "/user")
                .setAllowedOrigins("*")
                .addInterceptors(new HttpSessionHandshakeInterceptor());
        registry.addHandler(adminWebSocketHandler(), "/admin")
                .setAllowedOrigins("*")
                .addInterceptors(new HttpSessionHandshakeInterceptor());
    }
}
