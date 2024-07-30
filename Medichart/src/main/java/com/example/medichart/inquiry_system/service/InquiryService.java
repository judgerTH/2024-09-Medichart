package com.example.medichart.inquiry_system.service;

import com.example.medichart.inquiry_system.model.Inquiry;
import com.example.medichart.inquiry_system.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class InquiryService {

    private final InquiryRepository inquiryRepository;

    @Autowired
    public InquiryService(InquiryRepository inquiryRepository) {
        this.inquiryRepository = inquiryRepository;
    }

    public Inquiry saveInquiry(Inquiry inquiry) {
        inquiry.setCreatedAt(LocalDateTime.now());
        return inquiryRepository.save(inquiry);
    }
}
