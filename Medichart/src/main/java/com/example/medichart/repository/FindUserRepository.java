package com.example.medichart.repository;

import com.example.medichart.entity.FindUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FindUserRepository extends JpaRepository<FindUser, Long> {

    Optional<FindUser> findByEmail(String email);

    Optional<FindUser> findByUsernameAndEmail(String username, String email);

    // 추가적으로 필요한 쿼리 메서드들을 여기에 선언할 수 있습니다.
}
