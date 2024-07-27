package com.example.medichart.predict.repository;

import com.example.medichart.predict.entity.PredictResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PredictResultRepository extends JpaRepository<PredictResult, Long> {
}
