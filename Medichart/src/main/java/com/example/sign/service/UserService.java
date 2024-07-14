package com.example.sign.service;

import com.example.sign.dto.UserDTO;
import com.example.sign.entity.UserEntity;
import com.example.sign.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void save(UserDTO userDTO) {
        UserEntity userEntity = UserEntity.toUserEntity(userDTO);
        userRepository.save(userEntity);
    }
}
