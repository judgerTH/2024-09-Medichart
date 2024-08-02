package com.example.medichart.login.service;/*
package com.example.medichart.login.service;


import com.example.medichart.login.dto.UserDTO;
import com.example.medichart.login.entity.mail.UserEntity;
import com.example.medichart.login.repository.mail.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Collections;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public Long registerUser(UserDTO userDTO) {
        validatePassword(userDTO.getPassword(), userDTO.getConfirmPassword());

        UserEntity userEntity = UserEntity.builder()
                .email(userDTO.getEmail())
                .name(userDTO.getName())
                .password(passwordEncoder.encode(userDTO.getPassword()))
                .birthdate(userDTO.getBirthdate())
                .status("ACTIVE")
                .loginMethod("일반")
                .role("USER")
                .gender(userDTO.getGender())
                .createdAt(LocalDateTime.now())
                .build();

        return userRepository.save(userEntity).getId();
    }

    private void validatePassword(String password, String confirmPassword) {
        if (!password.equals(confirmPassword)) {
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
        }
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserEntity userEntity = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));

        return new org.springframework.security.core.userdetails.User(
                userEntity.getEmail(),
                userEntity.getPassword(),
                Collections.singleton(new SimpleGrantedAuthority("ROLE_" + userEntity.getRole()))
        );
    }
}*/
