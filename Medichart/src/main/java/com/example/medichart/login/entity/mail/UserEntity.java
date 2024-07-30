package com.example.medichart.login.entity.mail;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "user")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String password;

    @Column(name = "birthdate")
    private LocalDate birthdate;

    @Column(nullable = false)
    private String status = "INACTIVE";

    private String loginMethod = "일반";

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private String role = "USER";

    @Column(nullable = false)
    private String gender;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private TermsAgreementEntity termsAgreement;

    @Column(name = "email_verified", nullable = false)
    private Boolean emailVerified = false;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    public boolean isEmailVerified() {
        return Boolean.TRUE.equals(emailVerified);
    }
}