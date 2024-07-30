package com.example.medichart.login.dto.mail;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class EmailRequest {
    @NotBlank
    @Email
    private String email;
}