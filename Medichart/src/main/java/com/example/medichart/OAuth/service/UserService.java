package com.example.medichart.OAuth.service;

import com.example.medichart.OAuth.entity.UserEntity;
import com.example.medichart.OAuth.dto.UserProfile;
import com.example.medichart.OAuth.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserProfile getUserProfile(String username) {
        UserEntity userEntity = userRepository.findByUsername(username);
        if (userEntity == null) {
            throw new RuntimeException("User not found");
        }

        UserProfile userProfile = new UserProfile();
        userProfile.setUsername(userEntity.getUsername());
        userProfile.setEmail(userEntity.getEmail());
        userProfile.setName(userEntity.getName());

        return userProfile;
    }
    public void saveUser(UserEntity user) {
        if (user.getCreatedDate() == null) {
            user.setCreatedDate(LocalDateTime.now());
        }
        userRepository.save(user);
    }

    @Transactional(readOnly = true)
    public UserEntity findByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}