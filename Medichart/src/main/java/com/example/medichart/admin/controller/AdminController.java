package com.example.medichart.admin.controller;

import com.example.medichart.admin.service.UserStatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

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
        List<Long> last7DaysSignupCounts = userStatisticsService.getLast7DaysSignupCounts();
        List<Long> last12MonthsSignupCounts = userStatisticsService.getLast12MonthsSignupCounts();
        List<Long> last3YearsSignupCounts = userStatisticsService.getLast3YearsSignupCounts();

        model.addAttribute("오늘가입자수", todaySignupCount);
        model.addAttribute("일별가입자수", last7DaysSignupCounts);
        model.addAttribute("월별가입자수", last12MonthsSignupCounts);
        model.addAttribute("연도별가입자수", last3YearsSignupCounts);

        return "admin";
    }
}