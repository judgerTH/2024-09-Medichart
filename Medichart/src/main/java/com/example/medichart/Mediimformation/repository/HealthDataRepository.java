package com.example.medichart.Mediimformation.repository;

import com.example.medichart.Mediimformation.model.HealthData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HealthDataRepository extends JpaRepository<HealthData, Long> {
}
