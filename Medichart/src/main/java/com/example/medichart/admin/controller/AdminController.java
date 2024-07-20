package com.example.medichart.admin.controller;

import com.example.medichart.admin.service.UserStatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000") // React 앱이 구동 중인 URL
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
    @GetMapping("/today-signup-count")
    @ResponseBody
    public long getTodaySignupCount() {
        return userStatisticsService.getTodaySignupCount();
    }


}