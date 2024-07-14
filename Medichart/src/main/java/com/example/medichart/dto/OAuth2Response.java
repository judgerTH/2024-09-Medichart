package com.example.medichart.dto;

public interface OAuth2Response {
<<<<<<< HEAD
    String getProvider();
    String getProviderId();
    String getEmail();
    String getName();
=======
    String getUserID();      // User ID
    String getProvider();    // OAuth2 Provider (e.g., kakao, naver, google)
    String getProviderId();  // Provider ID
    String getEmail();       // User email
    String getName();        // User name
>>>>>>> 3f4f9053c680cd1b33293c489dc40f59592e661a
}
