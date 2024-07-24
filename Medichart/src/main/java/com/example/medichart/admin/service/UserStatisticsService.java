//package com.example.medichart.admin.service;
//
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Random;
//
//@Service
//public class UserStatisticsService {
//
//    private final List<Integer> signupCounts;
//
//    public UserStatisticsService() {
//        signupCounts = generateRandomSignupCounts();
//    }
//
//    public long getTodaySignupCount() {
//        return signupCounts.get(0); // 오늘 가입자 수
//    }
//
//    public List<Long> getLast7DaysSignupCounts() {
//        List<Long> last7DaysSignupCounts = new ArrayList<>();
//        for (int i = 0; i < 7; i++) {
//            last7DaysSignupCounts.add((long) signupCounts.get(i));
//        }
//        return last7DaysSignupCounts;
//    }
//
//    public List<Long> getLast12MonthsSignupCounts() {
//        List<Long> last12MonthsSignupCounts = new ArrayList<>();
//        for (int i = 7; i < 19; i++) {
//            last12MonthsSignupCounts.add((long) signupCounts.get(i));
//        }
//        return last12MonthsSignupCounts;
//    }
//
//    public List<Long> getLast3YearsSignupCounts() {
//        List<Long> last3YearsSignupCounts = new ArrayList<>();
//        for (int i = 19; i < 22; i++) {
//            last3YearsSignupCounts.add((long) signupCounts.get(i));
//        }
//        return last3YearsSignupCounts;
//    }
//
//    // 테스트용 랜덤 가입자 수 생성
//    private List<Integer> generateRandomSignupCounts() {
//        List<Integer> counts = new ArrayList<>();
//        Random random = new Random();
//        for (int i = 0; i < 22; i++) { // 0~21 인덱스에 데이터 생성
//            counts.add(random.nextInt(100)); // 0부터 99까지의 랜덤 숫자 생성
//        }
//        return counts;
//    }
//}
