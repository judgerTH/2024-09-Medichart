//
//package com.example.medichart.admin.service;
//
//import com.example.medichart.login.dto.InsertMemberDTO;
//import com.example.medichart.login.entity.mail.UserEntity;
//import com.example.medichart.login.repository.mail.UserRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//@Service("userServiceConstructor")
//public class UserService {
//    private final UserRepository userRepository;
//
//    @Autowired
//    public UserService(UserRepository userRepository) {
//        this.userRepository = userRepository;
//    }
//
//    public void save(InsertMemberDTO insertMemberDTO) {
//        UserEntity userEntity = UserEntity.toUserEntity(insertMemberDTO);
//        userRepository.save(userEntity);
//    }
//}
