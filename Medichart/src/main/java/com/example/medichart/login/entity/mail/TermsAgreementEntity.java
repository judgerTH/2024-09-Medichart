package com.example.medichart.login.entity.mail;/*
package com.example.medichart.login.entity.mail;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "terms_agreement")
@Data
public class TermsAgreementEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity user;

    @Column(name = "terms_accepted", nullable = false)
    private Boolean termsAccepted;

    @Column(name = "privacy_accepted", nullable = false)
    private Boolean privacyAccepted;

    @Column(name = "marketing_accepted")
    private Boolean marketingAccepted;
}*/
