package com.example.medichart.login.dto.mail;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CodeVerificationResponse {
    private boolean success;

    public CodeVerificationResponse(boolean success) {
        this.success = success;
    }
}