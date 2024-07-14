package com.example.medichart.dto;

import java.util.Map;

public class NaverResponse implements OAuth2Response {

    private final Map<String, Object> attribute;
    private final String id;

    public NaverResponse(Map<String, Object> attributes) {
        this.attribute = (Map<String, Object>) attributes.get("response");
        this.id = (String) attribute.get("id");
    }

    @Override
    public String getProvider() {
        return "naver";
    }

    @Override
    public String getProviderId() {
        return this.id;
    }

    @Override
    public String getEmail() {
        return attribute.get("email").toString();
    }

    @Override
    public String getName() {
        return attribute.get("name").toString();
    }
}
