package com.example.medichart.service;

public interface EmailService {
    void sendEmail(String to, String subject, String text);
}