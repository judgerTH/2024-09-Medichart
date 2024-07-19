package com.example.medichart.login.service;

import com.example.medichart.login.dto.InsertMemberDTO;
import com.example.medichart.login.entity.UserEntity;
import com.example.medichart.login.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userServiceField")
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void save(InsertMemberDTO insertMemberDTO) {
        UserEntity userEntity = UserEntity.toUserEntity(insertMemberDTO);
        userRepository.save(userEntity);
    }
}