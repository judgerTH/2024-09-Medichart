package com.example.medichart.login.service;

import com.example.medichart.login.entity.AdminUser;
import com.example.medichart.login.repository.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service

public class AdminUserService implements UserDetailsService {

    @Autowired
    private AdminUserRepository adminUserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AdminUser adminUser = adminUserRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return new org.springframework.security.core.userdetails.User(
                adminUser.getUsername(),
                adminUser.getPassword(),
                Collections.singletonList(new SimpleGrantedAuthority(adminUser.getRole()))
        );
    }
}