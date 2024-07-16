package com.example.medichart.login.repository;

import com.example.medichart.login.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {
    // 필요한 쿼리 메소드 추가
}
