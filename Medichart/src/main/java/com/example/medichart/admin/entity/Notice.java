package com.example.medichart.admin.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
public class Notice {
    private Long id;
    private String title;
    private String content;
    private LocalDateTime createdDate; // 생성 날짜 추가

    public Notice() {
    }

    public Notice(Long id, String title, String content, LocalDateTime createdDate) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdDate = createdDate;
    }
}