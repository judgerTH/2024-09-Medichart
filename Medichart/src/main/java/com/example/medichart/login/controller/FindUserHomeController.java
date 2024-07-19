package com.example.medichart.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FindUserHomeController {

    @GetMapping("/")
    public String index() {
        return "index";
    }
}
