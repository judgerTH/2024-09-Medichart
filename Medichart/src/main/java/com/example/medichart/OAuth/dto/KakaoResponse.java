package com.example.medichart.OAuth.dto;

import java.util.Map;

public class KakaoResponse implements OAuth2Response {

    private final Map<String, Object> attribute;

    public KakaoResponse(Map<String, Object> attribute) {
        // 카카오 응답에서 사용자의 정보를 포함하는 "properties" 또는 유사한 키를 사용한다고 가정합니다.
        this.attribute = (Map<String, Object>) attribute.get("kakao_account");
    }

    @Override
    public String getProvider() {
        return "kakao";
    }

    @Override
    public String getProviderId() {
        return attribute.get("id").toString();  // "id" 필드가 attribute 맵에 직접 포함되어 있다고 가정합니다.
    }

    @Override
    public String getEmail() {
        return attribute.get("email").toString();
    }

    @Override
    public String getName() {
        return attribute.get("nickname").toString();  // 사용자의 이름으로 "nickname" 키를 사용한다고 가정합니다.
    }
}