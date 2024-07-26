package com.example.medichart.admin.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Notice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String content;  // 공지 내용

    @Column(name = "created_date", nullable = false, updatable = false)
    private LocalDateTime createdDate;  // 생성일

    @Column(nullable = false)
    private String title;  // 제목

    // 기본 생성자
    public Notice() {}

    // Getter와 Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    // 엔티티가 저장되기 전에 생성일 설정
    @PrePersist
    protected void onCreate() {
        this.createdDate = LocalDateTime.now();
    }
}
