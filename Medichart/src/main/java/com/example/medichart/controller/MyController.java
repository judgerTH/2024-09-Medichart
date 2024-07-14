package com.example.medichart.controller;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MyController {

    @GetMapping("/my")
    public String myPage(Model model) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();//인증 객체 부분
        model.addAttribute("name", authentication.getName());
        model.addAttribute("Credentials", authentication.getCredentials());
        model.addAttribute("Authenticated", authentication.isAuthenticated());
        model.addAttribute("Principal", authentication.getPrincipal());

        return "my";
    }
}
