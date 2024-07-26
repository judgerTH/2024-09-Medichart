package com.example.medichart.login.controller;

import com.example.medichart.login.service.DialogflowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/chatbot")
public class DialogflowController {

    @Autowired
    private DialogflowService dialogflowService;

    @PostMapping
    public Map<String, String> handleDialogflowRequest(@RequestBody Map<String, String> request) throws IOException {
        String sessionId = UUID.randomUUID().toString();
        String queryText = request.get("message");

        String responseText = dialogflowService.detectIntentTexts(queryText, sessionId);

        Map<String, String> response = new HashMap<>();
        response.put("response", responseText);
        return response;
    }
}


