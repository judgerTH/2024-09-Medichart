package com.example.medichart.translator.controller;

import com.example.medichart.translator.api.Vision;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class ImageUploadController {

    @GetMapping("/upload")
    public String showUploadForm(Model model) {
        return "uploadForm";
    }

    @PostMapping("/upload")
    public String handleImageUpload(@RequestParam("image") MultipartFile image, Model model) {
        if (image.isEmpty()) {
            model.addAttribute("message", "파일이 업로드되지 않았습니다.");
            return "uploadForm";
        }

        try {
            String extractedText = Vision.extractTextFromImage(image.getInputStream());
            model.addAttribute("uploadedText", extractedText);
            model.addAttribute("message", "이미지 업로드 성공");
            return "uploadResult";
        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("message", "텍스트 추출 실패: " + e.getMessage());
            return "uploadForm";
        }
    }
}
