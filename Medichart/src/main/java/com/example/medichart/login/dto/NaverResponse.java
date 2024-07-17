package com.example.medichart.login.dto;

import java.util.Map;

public class NaverResponse implements OAuth2Response {

    private final Map<String, Object> attributes;
    private final Long id;

    public NaverResponse(Map<String, Object> attributes) {
        this.attributes = attributes;
        this.id = attributes.get("id") instanceof Long ? (Long) attributes.get("id") : null;
    }

    @Override
    public String getProvider() {
        return "naver";
    }

    @Override
    public String getUserID() {
        return getProviderId(); // User ID를 Provider ID로 설정
    }

    @Override
    public String getProviderId() {
        return this.id != null ? this.id.toString() : null; // null 체크 추가
    }

    @Override
    public String getEmail() {
        Map<String, Object> naverAccount = (Map<String, Object>) attributes.get("email");
        return naverAccount != null ? (String) naverAccount.get("email") : null;
    }

    @Override
    public String getName() {
        Map<String, Object> profile = (Map<String, Object>) attributes.get("profile");
        return profile != null ? (String) profile.get("profile") : null;
    }
}