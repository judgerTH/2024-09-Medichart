package com.example.medichart.admin.service;

import com.example.medichart.admin.entity.Notice;
import com.example.medichart.admin.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class NoticeServiceImpl implements NoticeService {

    private final NoticeRepository noticeRepository;

    @Autowired
    public NoticeServiceImpl(NoticeRepository noticeRepository) {
        this.noticeRepository = noticeRepository;
    }

    @Override
    public List<Notice> getAllNotices() {
        return noticeRepository.findAll();
    }

    @Override
    public Optional<Notice> getNoticeById(Long id) {
        return noticeRepository.findById(id);
    }

    @Override
    @Transactional
    public Notice createNotice(String title, String content) {
        Notice notice = new Notice();
        notice.setTitle(title);
        notice.setContent(content);
        // createdDate는 @PrePersist로 자동 설정됨
        return noticeRepository.save(notice);
    }

    @Override
    @Transactional
    public Notice updateNotice(Long id, String title, String content) {
        Optional<Notice> existingNotice = noticeRepository.findById(id);
        if (existingNotice.isPresent()) {
            Notice notice = existingNotice.get();
            notice.setTitle(title);
            notice.setContent(content);
            // 엔티티의 상태가 변경되면 JPA가 자동으로 업데이트를 처리함
            return noticeRepository.save(notice);
        }
        return null;
    }

    @Override
    @Transactional
    public boolean deleteNotice(Long id) {
        if (noticeRepository.existsById(id)) {
            noticeRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
