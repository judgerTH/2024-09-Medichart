package com.example.medichart.inquiry_system.repository;

import com.example.medichart.inquiry_system.model.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
}
