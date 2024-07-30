package com.example.medichart.login.controller;

import com.example.medichart.login.dto.mail.*;
import com.example.medichart.login.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;

    /**
     * 회원 가입 처리
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<ResponseDto<String>> registerUser(@Valid @RequestBody RegisterRequestDTO registerRequestDTO, BindingResult result) {
        logger.info("이메일로 사용자 등록 시도: {}", registerRequestDTO.getUserDTO().getEmail());

        if (result.hasErrors()) {
            String errorMessage = result.getAllErrors().stream()
                    .map(e -> e.getDefaultMessage())
                    .reduce("", (msg1, msg2) -> msg1 + " " + msg2).trim();
            logger.warn("사용자 등록 중 유효성 검사 오류: {}", errorMessage);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ResponseDto.setFailed(errorMessage));
        }

        try {
            ResponseDto<String> response = userService.registerUserWithVerification(
                    registerRequestDTO.getUserDTO(),
                    registerRequestDTO.getTermsAgreementDTO(),
                    registerRequestDTO.getVerificationCode()
            );
            logger.info("사용자 등록 성공: {}", registerRequestDTO.getUserDTO().getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            logger.error("사용자 등록 실패: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ResponseDto.setFailed(e.getMessage()));
        }
    }

    /**
     * 이메일로 인증 코드 요청
     */
    @PostMapping("/verify-email")
    public ResponseEntity<ResponseDto<String>> requestVerificationCode(@Valid @RequestBody EmailRequest emailRequest) {
        logger.info("이메일로 인증 코드 요청: {}", emailRequest.getEmail());
        try {
            ResponseDto<String> response = userService.sendVerificationCode(emailRequest.getEmail());
            logger.info("인증 코드가 이메일로 전송됨: {}", emailRequest.getEmail());
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            logger.warn("인증 코드 전송 실패: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ResponseDto.setFailed(e.getMessage()));
        } catch (RuntimeException e) {
            logger.error("인증 코드 전송 중 예기치 못한 오류 발생: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(ResponseDto.setFailed(e.getMessage()));
        }
    }

    /**
     * 인증 코드 검증
     */
    @PostMapping("/verify-code")
    public ResponseEntity<ResponseDto<String>> verifyCode(@Valid @RequestBody CodeVerificationRequest verificationRequest) {
        logger.info("이메일 인증 코드 검증 시도: {}", verificationRequest.getEmail());
        boolean isValid = userService.verifyCode(verificationRequest.getEmail(), verificationRequest.getCode());
        if (isValid) {
            logger.info("이메일 인증 성공: {}", verificationRequest.getEmail());
            return ResponseEntity.ok(ResponseDto.setSuccess("이메일 인증이 완료되었습니다."));
        } else {
            logger.warn("유효하지 않거나 만료된 인증 코드: {}", verificationRequest.getEmail());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ResponseDto.setFailed("유효하지 않거나 만료된 인증 코드입니다."));
        }
    }

    /**
     * 사용자 로그인
     */
    @RequestMapping("/login")
    public String showLoginPage() {
        return "login"; // login.html 페이지로 이동
    }

    @PostMapping("/login")
    public ModelAndView login(@RequestParam("email") String email, @RequestParam("password") String password) {
        boolean isAuthenticated = userService.authenticateUser(email, password);
        if (isAuthenticated) {
            return new ModelAndView("redirect:/home"); // 로그인 성공 시 홈 페이지로 이동
        } else {
            return new ModelAndView("login")
                    .addObject("errorMessage", "이메일 또는 비밀번호가 잘못되었습니다."); // 오류 메시지 표시
        }
    }
}