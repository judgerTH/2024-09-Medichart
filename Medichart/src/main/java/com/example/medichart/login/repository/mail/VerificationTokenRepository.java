package com.example.medichart.login.repository.mail;



import com.example.medichart.login.entity.mail.VerificationTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationTokenEntity, Long> {
    Optional<VerificationTokenEntity> findTopByEmailOrderByCreatedDateDesc(String email);
    Optional<VerificationTokenEntity> findByEmailAndToken(String email, String token);
}