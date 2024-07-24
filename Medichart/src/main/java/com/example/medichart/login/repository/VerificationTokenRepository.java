package com.example.medichart.login.repository;

import com.example.medichart.login.entity.UserEntity;
import com.example.medichart.login.entity.VerificationToken;
import com.example.medichart.login.enums.TokenType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {
    Optional<VerificationToken> findByToken(String token);
    Optional<VerificationToken> findByUserAndTokenType(UserEntity user, TokenType tokenType);
}