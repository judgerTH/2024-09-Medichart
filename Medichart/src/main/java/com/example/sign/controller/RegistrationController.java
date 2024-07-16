package com.example.sign.controller;

import com.example.sign.dto.UserDTO;
import com.example.sign.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RegistrationController {

    @Autowired
    private UserService userService;

    @GetMapping("/signup")
    public String showSignupForm(Model model) {
        model.addAttribute("user", new UserDTO());
        return "signup"; // 회원가입 페이지로 이동
    }

    @PostMapping("/signup")
    public String processRegistration(UserDTO userDTO) {
        userService.save(userDTO);
        return "redirect:/login"; // 회원가입 완료 후 로그인 페이지로 리디렉션
    }

    @GetMapping("/login")
    public String showLoginForm() {
        return "login"; // 로그인 페이지로 이동
    }
}
