package com.example.medichart.login.repository.mail;

import com.example.medichart.login.entity.mail.TermsAgreementEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TermsAgreementRepository extends JpaRepository<TermsAgreementEntity, Long> {
    Optional<TermsAgreementEntity> findByUserId(Long userId);
}