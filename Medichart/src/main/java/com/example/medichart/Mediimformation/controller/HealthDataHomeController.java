package com.example.medichart.Mediimformation.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class HealthDataHomeController {
    @GetMapping("healthdata")
    public String home() {
        return "healthdata";
    }
}

