package com.example.medichart.Mediimformation.service;

import com.example.medichart.Mediimformation.model.HealthData;
import com.example.medichart.Mediimformation.repository.HealthDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;  // 수정된 import

@Service
public class HealthDataService {

    @Autowired
    private HealthDataRepository repository;

    public HealthData saveHealthData(HealthData healthData) {
        return repository.save(healthData);
    }

    public List<HealthData> saveHealthData(List<HealthData> healthDataList) {
        return repository.saveAll(healthDataList);
    }
}
