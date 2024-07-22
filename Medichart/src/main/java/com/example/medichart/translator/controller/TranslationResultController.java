package com.example.medichart.translator.controller;

import com.example.medichart.translator.api.TranslateService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class TranslationResultController {

    @PostMapping("/translate")
    public String handleTranslation(@RequestParam String text, @RequestParam String language, Model model) {
        try {
            String translatedText;
            if ("en".equals(language)) {
                translatedText = TranslateService.translateText(text, "en");
            } else {
                String englishText = TranslateService.translateText(text, "en");
                translatedText = TranslateService.translateText(englishText, language);
            }

            model.addAttribute("text", text);
            model.addAttribute("translatedText", translatedText);
            return "translationResult";
        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("message", "번역 실패: " + e.getMessage());
            return "uploadResult";
        }
    }

    @GetMapping("/translateForm")
    public String showTranslationForm(Model model) {
        return "uploadResult";
    }
}
