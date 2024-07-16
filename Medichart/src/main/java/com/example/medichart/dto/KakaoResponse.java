package com.example.medichart.dto;

import java.util.Map;

<<<<<<< HEAD
public class KakaoResponse implements OAuth2Response{

    private final Map<String, Object> attribute;
    private final Long id;

    public KakaoResponse(Map<String, Object> attribute) {
        this.attribute = (Map<String, Object>) attribute.get("kakao_account");
        this.id = (Long) attribute.get("id");
=======
public class KakaoResponse implements OAuth2Response {

    private final Map<String, Object> attributes;
    private final Long id;

    public KakaoResponse(Map<String, Object> attributes) {
        this.attributes = attributes;
        this.id = (Long) attributes.get("id");
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
    }

    @Override
    public String getProvider() {
        return "kakao";
    }

    @Override
<<<<<<< HEAD
=======
    public String getUserID() {
        return getProviderId(); // User ID를 Provider ID로 설정
    }

    @Override
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
    public String getProviderId() {
        return this.id.toString();
    }

    @Override
    public String getEmail() {
<<<<<<< HEAD
        return attribute.get("email").toString();
=======
        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        return kakaoAccount != null ? (String) kakaoAccount.get("email") : null;
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
    }

    @Override
    public String getName() {
<<<<<<< HEAD
        return ((Map<String, Object>) attribute.get("profile")).get("nickname").toString();
=======
        Map<String, Object> profile = (Map<String, Object>) attributes.get("profile");
        return profile != null ? (String) profile.get("nickname") : null;
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
    }
}
