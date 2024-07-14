package com.example.medichart.dto;

import java.util.Map;

public class GoogleResponse implements OAuth2Response {

<<<<<<< HEAD
    private final Map<String, Object> attribute;
    private final String id;

    public GoogleResponse(Map<String, Object> attribute) {
        this.attribute = attribute;
        this.id = (String) attribute.get("sub");
=======
    private final Map<String, Object> attributes;
    private final Long id;

    public GoogleResponse(Map<String, Object> attributes) {
        this.attributes = attributes;
        this.id = (Long) attributes.get("id");
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
    }

    @Override
    public String getProvider() {
        return "google";
    }

    @Override
<<<<<<< HEAD
    public String getProviderId() {
        return this.id;
=======
    public String getUserID() {
        return getProviderId(); // User ID를 Provider ID로 설정
    }

    @Override
    public String getProviderId() {
        return this.id.toString();
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
    }

    @Override
    public String getEmail() {
<<<<<<< HEAD
        return attribute.get("email").toString();
=======
        Map<String, Object> googleAccount = (Map<String, Object>) attributes.get("google_account");
        return googleAccount != null ? (String) googleAccount.get("email") : null;
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
    }

    @Override
    public String getName() {
<<<<<<< HEAD
        return attribute.get("name").toString();
    }
}
=======
        Map<String, Object> profile = (Map<String, Object>) attributes.get("profile");
        return profile != null ? (String) profile.get("nickname") : null;
    }
}
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
