package com.example.medichart.dto;

import java.util.Map;

public class KakaoResponse implements OAuth2Response {

    private final Map<String, Object> attributes;
    private final Long id;

    public KakaoResponse(Map<String, Object> attributes) {
        this.attributes = attributes;
        this.id = (Long) attributes.get("id");
    }

    @Override
    public String getProvider() {
        return "kakao";
    }

    @Override
    public String getUserID() {
        return getProviderId(); // User ID를 Provider ID로 설정
    }

    @Override
    public String getProviderId() {
        return this.id.toString();
    }

    @Override
    public String getEmail() {
        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        return kakaoAccount != null ? (String) kakaoAccount.get("email") : null;
    }

    @Override
    public String getName() {
        Map<String, Object> profile = (Map<String, Object>) attributes.get("profile");
        return profile != null ? (String) profile.get("nickname") : null;
    }
}
