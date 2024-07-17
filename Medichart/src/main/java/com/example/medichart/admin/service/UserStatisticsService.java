package com.example.medichart.admin.service;

import org.springframework.stereotype.Service;

@Service
public class UserStatisticsService {

    public long getTodaySignupCount() {
        // 실제로는 데이터베이스 쿼리를 실행하여 오늘 가입한 사용자 수를 가져와야 합니다.
        return 2942; // 예시로 10명이 오늘 가입했다고 가정
    }
}
