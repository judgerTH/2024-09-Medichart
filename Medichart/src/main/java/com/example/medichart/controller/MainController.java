package com.example.medichart.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

<<<<<<< HEAD
    @GetMapping("/")
=======
    @GetMapping("/main")
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
    public String mainPage(){
        return "main";
    }
}
