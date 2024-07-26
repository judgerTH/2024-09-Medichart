package com.example.medichart.login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/chatbot")
    public String chatbot() {
        return "chatbot";
    }
}
