package com.example.medichart.admin.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class Notice {
    private Long id;
    private String title;
    private String content;

    public Notice() {
    }

    public Notice(Long id, String title, String content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}