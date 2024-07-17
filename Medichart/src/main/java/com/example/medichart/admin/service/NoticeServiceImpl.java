package com.example.medichart.admin.service;

import com.example.medichart.admin.entity.Notice;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NoticeServiceImpl implements NoticeService {

    private List<Notice> notices = new ArrayList<>();
    private Long nextId = 1L;

    @Override
    public List<Notice> getAllNotices() {
        return notices;
    }

    @Override
    public Optional<Notice> getNoticeById(Long id) {
        return notices.stream()
                .filter(notice -> notice.getId().equals(id))
                .findFirst();
    }

    @Override
    public Notice createNotice(String title, String content) {
        Notice newNotice = new Notice(nextId++, title, content);
        notices.add(newNotice);
        return newNotice;
    }

    @Override
    public Notice updateNotice(Long id, String title, String content) {
        Optional<Notice> optionalNotice = getNoticeById(id);
        if (optionalNotice.isPresent()) {
            Notice existingNotice = optionalNotice.get();
            existingNotice.setTitle(title);
            existingNotice.setContent(content);
            return existingNotice;
        }
        return null;
    }

    @Override
    public boolean deleteNotice(Long id) {
        return notices.removeIf(notice -> notice.getId().equals(id));
    }
}