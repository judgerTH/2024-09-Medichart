package com.example.medichart.login.controller;

import com.example.medichart.login.dto.UserDTO;
import com.example.medichart.login.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // 사용자 등록 페이지
    @GetMapping("/register")
    public String showRegistrationForm(Model model) {
        model.addAttribute("userDTO", new UserDTO());
        return "register";
    }

    // 사용자 등록 처리
    @PostMapping("/register")
    public String registerUser(@Valid @ModelAttribute UserDTO userDTO, BindingResult result) {
        if (result.hasErrors()) {
            return "register";
        }

        userService.registerUser(userDTO);
        return "redirect:/verify-email";
    }

    // 이메일 인증 안내 페이지
    @GetMapping("/verify-email")
    public String showVerificationPage() {
        return "verify-email";
    }

    // 이메일 인증 처리
    @GetMapping("/verify")
    public String verifyEmail(@RequestParam("token") String token, Model model) {
        boolean isVerified = userService.verifyEmail(token);
        if (isVerified) {
            model.addAttribute("message", "이메일 인증에 성공했습니다.");
        } else {
            model.addAttribute("message", "이메일 인증에 실패했습니다.");
        }
        return "verification-result"; // 인증 결과를 보여줄 HTML 페이지
    }

    // 로그인 페이지
    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

    // 홈 페이지
    @GetMapping("/home")
    public String showHomePage() {
        return "home"; // 로그인 후 이동할 페이지
    }
}