package com.example.medichart.admin.service;

import com.example.medichart.admin.entity.Notice;

import java.util.List;
import java.util.Optional;

public interface NoticeService {

    List<Notice> getAllNotices();

    Optional<Notice> getNoticeById(Long id);

    Notice createNotice(String title, String content);

    Notice updateNotice(Long id, String title, String content);

    boolean deleteNotice(Long id);
}
