package com.example.medichart.Mediimformation.controller;

import com.example.medichart.Mediimformation.model.HealthData;
import com.example.medichart.Mediimformation.service.HealthDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;  // 수정된 import
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/healthdata")
public class HealthDataController {

    @Autowired
    private HealthDataService service;

    @PostMapping("/evaluate")
    public ResponseEntity<?> evaluateHealthData(@RequestBody List<HealthData> healthDataList) {
        RestTemplate restTemplate = new RestTemplate();
        String pythonApiUrl = "http://localhost:5000/evaluate";

        // Python API에 POST 요청 보내기
        ResponseEntity<Map[]> response = restTemplate.postForEntity(pythonApiUrl, healthDataList, Map[].class);
        Map[] evaluatedData = response.getBody();

        if (evaluatedData != null) {
            // Map을 HealthData 객체로 변환
            List<HealthData> healthDataListWithRisks = Arrays.stream(evaluatedData)
                    .map(data -> {
                        HealthData healthData = new HealthData();
                        // 데이터 매핑 예제
                        healthData.setId(((Number) data.get("id")).longValue());
                        healthData.setGender((Integer) data.get("gender"));
                        healthData.setAgeGroup((Integer) data.get("ageGroup"));
                        healthData.setHeight((Integer) data.get("height"));
                        healthData.setWeight((Integer) data.get("weight"));
                        healthData.setWaistCircumference(((Number) data.get("waistCircumference")).floatValue());
                        healthData.setSystolicBloodPressure(((Number) data.get("systolicBloodPressure")).floatValue());
                        healthData.setDiastolicBloodPressure(((Number) data.get("diastolicBloodPressure")).floatValue());
                        healthData.setFastingBloodSugar(((Number) data.get("fastingBloodSugar")).floatValue());
                        healthData.setHemoglobin(((Number) data.get("hemoglobin")).floatValue());
                        healthData.setProtein((String) data.get("protein"));
                        healthData.setSerumCreatinine(((Number) data.get("serumCreatinine")).floatValue());
                        healthData.setAst(((Number) data.get("ast")).floatValue());
                        healthData.setAlt(((Number) data.get("alt")).floatValue());
                        healthData.setGammaGtp(((Number) data.get("gammaGtp")).floatValue());
                        healthData.setSmokingStatus((Integer) data.get("smokingStatus"));
                        healthData.setAlcoholStatus((Integer) data.get("alcoholStatus"));
                        return healthData;
                    })
                    .collect(Collectors.toList());

            // 평가된 데이터를 데이터베이스에 저장
            service.saveHealthData(healthDataListWithRisks);
        }

        return ResponseEntity.ok(evaluatedData);
    }
}
