package com.example.medichart.dto;

import java.util.Map;

public class GoogleResponse implements OAuth2Response {

    private final Map<String, Object> attribute;
    private final String id;

    public GoogleResponse(Map<String, Object> attribute) {
        this.attribute = attribute;
        this.id = (String) attribute.get("sub");
    }

    @Override
    public String getProvider() {
        return "google";
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