package com.example.medichart.repository;

import com.example.medichart.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserEntity, String> {
    // 필요한 쿼리 메소드 추가
}
