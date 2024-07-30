package com.example.medichart.login.service;
import com.example.medichart.login.dto.mail.ResponseDto;
import com.example.medichart.login.dto.mail.TermsAgreementDTO;
import com.example.medichart.login.dto.UserDTO;
import com.example.medichart.login.entity.mail.TermsAgreementEntity;
import com.example.medichart.login.entity.mail.UserEntity;
import com.example.medichart.login.entity.mail.VerificationTokenEntity;
import com.example.medichart.login.repository.mail.TermsAgreementRepository;
import com.example.medichart.login.repository.mail.UserRepository;
import com.example.medichart.login.repository.mail.VerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;
@Service
@RequiredArgsConstructor
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;
    private final VerificationTokenRepository tokenRepository;
    private final TermsAgreementRepository termsAgreementRepository;
    private final JavaMailSender mailSender;
    private final PasswordEncoder passwordEncoder;

    /**
     * 이메일 인증과 약관 동의 저장을 포함한 사용자 등록.
     */
    @Transactional
    public ResponseDto<String> registerUserWithVerification(UserDTO userDTO, TermsAgreementDTO termsAgreementDTO, String verificationCode) {
        logger.info("이메일 등록 절차 시작: {}", userDTO.getEmail());

        if (userRepository.existsByEmail(userDTO.getEmail())) {
            logger.warn("이미 사용 중인 이메일로 등록 시도: {}", userDTO.getEmail());
            return ResponseDto.setFailed("이미 사용 중인 이메일입니다.");
        }

        if (!userDTO.isPasswordMatching()) {
            logger.warn("비밀번호 불일치: {}", userDTO.getEmail());
            return ResponseDto.setFailed("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }

        if (!verifyCode(userDTO.getEmail(), verificationCode)) {
            logger.warn("유효하지 않거나 만료된 인증 코드: {}", userDTO.getEmail());
            return ResponseDto.setFailed("유효하지 않거나 만료된 인증 코드입니다.");
        }

        UserEntity user = createUserEntity(userDTO);
        userRepository.save(user);
        logger.info("이메일로 사용자 등록 완료: {}", userDTO.getEmail());

        TermsAgreementEntity termsAgreement = createTermsAgreementEntity(user.getId(), termsAgreementDTO);
        termsAgreementRepository.save(termsAgreement);
        logger.info("사용자 약관 동의 저장 완료: {}", user.getId());

        return ResponseDto.setSuccess("회원가입이 완료되었습니다.");
    }

    private UserEntity createUserEntity(UserDTO userDTO) {
        UserEntity user = new UserEntity();
        user.setEmail(userDTO.getEmail().trim().toLowerCase());
        user.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        user.setName(userDTO.getName());
        user.setBirthdate(userDTO.getBirthdate());
        user.setGender(userDTO.getGender());
        user.setEmailVerified(true);
        return user;
    }

    private TermsAgreementEntity createTermsAgreementEntity(Long userId, TermsAgreementDTO termsAgreementDTO) {
        TermsAgreementEntity termsAgreement = new TermsAgreementEntity();
        UserEntity user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("해당 ID로 사용자를 찾을 수 없습니다: " + userId));
        termsAgreement.setUser(user);
        termsAgreement.setTermsAccepted(termsAgreementDTO.getTermsAccepted());
        termsAgreement.setPrivacyAccepted(termsAgreementDTO.getPrivacyAccepted());
        termsAgreement.setMarketingAccepted(termsAgreementDTO.getMarketingAccepted());
        return termsAgreement;
    }

    /**
     * 제공된 이메일로 인증 코드를 전송합니다.
     */
    @Transactional
    public ResponseDto<String> sendVerificationCode(String email) {
        logger.info("이메일로 인증 코드 요청: {}", email);

        if (userRepository.existsByEmail(email)) {
            logger.warn("이미 사용 중인 이메일로 인증 코드 요청 시도: {}", email);
            return ResponseDto.setFailed("이미 사용 중인 이메일입니다.");
        }

        String code = generateVerificationCode();
        saveVerificationToken(email, code);
        try {
            sendEmailWithVerificationCode(email, code);
        } catch (MailException e) {
            logger.error("인증 이메일 전송 실패: {}", email, e);
            return ResponseDto.setFailed("이메일 전송에 실패했습니다.");
        }

        logger.info("인증 코드가 이메일로 전송됨: {}", email);
        return ResponseDto.setSuccess("이메일 인증 코드가 발송되었습니다.");
    }

    private String generateVerificationCode() {
        return String.format("%06d", new Random().nextInt(999999));
    }

    private void saveVerificationToken(String email, String code) {
        VerificationTokenEntity token = new VerificationTokenEntity();
        token.setEmail(email.trim().toLowerCase());
        token.setToken(code);
        token.setCreatedDate(LocalDateTime.now());
        token.setExpiryDate(LocalDateTime.now().plusMinutes(3));
        tokenRepository.save(token);
        logger.info("이메일에 대한 인증 토큰 저장: {}", email);
    }

    private void sendEmailWithVerificationCode(String email, String code) {
        String verificationText = "다음 코드를 사용하여 이메일을 인증하십시오: " + code;
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("이메일 인증 코드");
        message.setText(verificationText);
        mailSender.send(message);
        logger.debug("인증 이메일 발송 완료: {}", email);
    }

    @Transactional
    public boolean verifyCode(String email, String code) {
        email = email.trim().toLowerCase();
        logger.debug("이메일: {} 및 코드: {} 에 대한 토큰 검증", email, code);

        Optional<VerificationTokenEntity> tokenOpt = tokenRepository.findByEmailAndToken(email, code);
        if (tokenOpt.isPresent()) {
            VerificationTokenEntity token = tokenOpt.get();
            logger.debug("이메일: {} 에 대한 토큰 발견: {}", token.getEmail(), token.getToken());
            if (isTokenValid(token)) {
                tokenRepository.delete(token);
                return true;
            } else {
                logger.warn("이메일: {} 에 대한 토큰이 유효하지 않거나 만료됨", email);
            }
        } else {
            logger.warn("이메일: {} 및 코드: {} 에 대한 토큰을 찾을 수 없음", email, code);
        }
        return false;
    }

    private boolean isTokenValid(VerificationTokenEntity token) {
        return token.getExpiryDate().isAfter(LocalDateTime.now());
    }

    @Transactional(readOnly = true)
    public boolean authenticateUser(String email, String password) {
        logger.info("이메일로 사용자 인증: {}", email);
        UserEntity user = userRepository.findByEmail(email.trim().toLowerCase())
                .orElseThrow(() -> new IllegalArgumentException("이메일로 사용자를 찾을 수 없습니다: " + email));

        boolean isAuthenticated = passwordEncoder.matches(password, user.getPassword());
        logger.debug("이메일: {} - 인증 성공 여부: {}", email, isAuthenticated);
        return isAuthenticated;
    }
}