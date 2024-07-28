package com.example.medichart.predict.controller;

import com.example.medichart.predict.entity.PredictResult;
import com.example.medichart.predict.service.PredictResultService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/predictions")
@CrossOrigin(origins = "http://localhost:3000")
public class PredictResultSendController {

    private static final Logger logger = LoggerFactory.getLogger(PredictResultSendController.class);
    private final PredictResultService predictResultService;

    @Autowired
    public PredictResultSendController(PredictResultService predictResultService) {
        this.predictResultService = predictResultService;
    }

    @GetMapping
    public List<PredictResult> getPredictionResultsByUserId(@RequestParam String userId) {
        List<PredictResult> results = predictResultService.getPredictResultsByUserId(userId);
        logger.info("Fetched prediction results: {}", results);
        return results;
    }
}
