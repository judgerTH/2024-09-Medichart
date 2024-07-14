package com.example.medichart.dto;

public interface OAuth2Response {
    String getUserID();      // User ID
    String getProvider();    // OAuth2 Provider (e.g., kakao, naver, google)
    String getProviderId();  // Provider ID
    String getEmail();       // User email
    String getName();        // User name
}
