package com.example.medichart.service;

import com.example.medichart.dto.InsertMemberDTO;
import com.example.medichart.entity.UserEntity;
import com.example.medichart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void save(InsertMemberDTO insertMemberDTO) {
        UserEntity userEntity = UserEntity.toUserEntity(insertMemberDTO);
        userRepository.save(userEntity);
    }
}
