package com.example.medichart.controller;

import com.example.medichart.dto.InsertMemberDTO;
import com.example.medichart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RegistrationController {

    @Autowired
    private UserService userService;

    @GetMapping("/signup")
    public String showSignupForm(Model model) {
        model.addAttribute("user", new InsertMemberDTO());
        return "signup";
    }

    @PostMapping("/signup")
    public String processRegistration(InsertMemberDTO insertMemberDTO) {
        userService.save(insertMemberDTO);
        return "redirect:/login";  // 회원가입 후 로그인 페이지로 리다이렉트
    }

    // 이 부분을 제거하거나 다른 경로로 변경
    // @GetMapping("/login")
    // public String showLoginForm() {
    //     return "login";  // 로그인 페이지로 리다이렉트
    // }
    @RequestMapping("/admin/Main.do")
    public String admin_index(){
        return "/admin/Main";

    }
}
