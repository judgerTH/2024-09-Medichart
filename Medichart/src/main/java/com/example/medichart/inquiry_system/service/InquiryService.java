package com.example.medichart.inquiry_system.service;

import com.example.medichart.inquiry_system.model.Inquiry;
import com.example.medichart.inquiry_system.repository.InquiryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class InquiryService {
    @Autowired
    private InquiryRepository inquiryRepository;

    public Inquiry saveInquiry(Inquiry inquiry) {
        inquiry.setCreatedAt(new Date());
        return inquiryRepository.save(inquiry);
    }
}
