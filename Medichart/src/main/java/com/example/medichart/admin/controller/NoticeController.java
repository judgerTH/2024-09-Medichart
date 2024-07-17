package com.example.medichart.admin.controller;

import com.example.medichart.admin.entity.Notice;
import com.example.medichart.admin.service.NoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
        return "notice-list";
    }

    @GetMapping("/new")
    public String showNoticeForm(Model model) {
        model.addAttribute("notice", new Notice());
        return "notice-form";
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
            return "notice-form";
        } else {
            return "redirect:/admin/notices/list";
        }
    }

    @PostMapping("/edit/{id}")
    public String updateNotice(@PathVariable Long id, @ModelAttribute Notice updatedNotice) {
        noticeService.updateNotice(id, updatedNotice.getTitle(), updatedNotice.getContent());
        return "redirect:/admin/notices/list";
    }

    @GetMapping("/delete/{id}")
    public String deleteNotice(@PathVariable Long id) {
        noticeService.deleteNotice(id);
        return "redirect:/admin/notices/list";
    }
}