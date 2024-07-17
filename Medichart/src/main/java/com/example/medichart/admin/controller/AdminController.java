package com.example.medichart.admin.controller;

import com.example.medichart.admin.service.UserStatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/admin")
public class AdminController {

    private final UserStatisticsService userStatisticsService;

    @Autowired
    public AdminController(UserStatisticsService userStatisticsService) {
        this.userStatisticsService = userStatisticsService;
    }

    @GetMapping("/dashboard")
    public String adminDashboard(Model model) {
        long todaySignupCount = userStatisticsService.getTodaySignupCount();
        model.addAttribute("오늘가입자수", todaySignupCount); // "오늘가입자수" 속성 추가
        return "admin";
    }

}