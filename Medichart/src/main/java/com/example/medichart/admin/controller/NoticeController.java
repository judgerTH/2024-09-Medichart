package com.example.medichart.admin.controller;

import com.example.medichart.admin.entity.Notice;
import com.example.medichart.admin.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/admin/notices")
public class NoticeController {

    private final NoticeService noticeService;

    @Autowired
    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    @GetMapping("/list")
    public String getAllNotices(Model model) {
        List<Notice> notices = noticeService.getAllNotices();
        model.addAttribute("notices", notices);
        return "notice-list";  // Thymeleaf 템플릿 이름
    }

    @GetMapping("/new")
    public String showNoticeForm(Model model) {
        model.addAttribute("notice", new Notice());
        return "notice-form";  // Thymeleaf 템플릿 이름
    }

    @PostMapping("/new")
    public String createNotice(@ModelAttribute Notice notice) {
        noticeService.createNotice(notice.getTitle(), notice.getContent());
        return "redirect:/admin/notices/list";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable Long id, Model model) {
        Optional<Notice> notice = noticeService.getNoticeById(id);
        if (notice.isPresent()) {
            model.addAttribute("notice", notice.get());
            return "notice-form";  // Thymeleaf 템플릿 이름
        } else {
            return "redirect:/admin/notices/list";
        }
    }

    @PostMapping("/edit/{id}")
    public String updateNotice(@PathVariable Long id, @ModelAttribute Notice updatedNotice) {
        Notice updated = noticeService.updateNotice(id, updatedNotice.getTitle(), updatedNotice.getContent());
        if (updated != null) {
            return "redirect:/admin/notices/list";
        } else {
            return "redirect:/admin/notices/list";  // 실패 시 적절한 오류 페이지로 리다이렉트
        }
    }

    @GetMapping("/delete/{id}")
    public String deleteNotice(@PathVariable Long id) {
        noticeService.deleteNotice(id);
        return "redirect:/admin/notices/list";
    }
}
