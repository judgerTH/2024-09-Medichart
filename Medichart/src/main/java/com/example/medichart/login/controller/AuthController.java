package com.example.medichart.login.controller;

import com.example.medichart.login.service.UserService;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;

    @PostMapping("/forgotPassword")
    public ResponseEntity<String> forgotPassword(@RequestParam String email) {
        userService.createPasswordResetTokenForUser(email);
        return ResponseEntity.ok("비밀번호 재설정 이메일이 전송되었습니다.");
    }

    @PostMapping("/resetPassword")
    public ResponseEntity<String> resetPassword(@RequestParam String token, @RequestParam String newPassword) {
        userService.resetPassword(token, newPassword);
        return ResponseEntity.ok("비밀번호가 성공적으로 재설정되었습니다.");
    }

    @PostMapping("/findEmails")
    public ResponseEntity<List<String>> findEmails(@RequestParam String name, @RequestParam Date birthdate) {
        List<String> emails = userService.findEmailsByNameAndBirthdate(name, birthdate);
        return ResponseEntity.ok(emails);
    }
}