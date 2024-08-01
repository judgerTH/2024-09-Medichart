package com.example.medichart.login.service;/*
package com.example.medichart.login.service;

import com.google.cloud.dialogflow.v2.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;

@Service
public class DialogflowService {

    @Value("classpath:medichart-428805-42763aa8030c.json")
    private Resource googleCredentials;

    private String projectId = "medichart-428805";

    @PostConstruct
    public void init() throws IOException {
        System.setProperty("GOOGLE_APPLICATION_CREDENTIALS", googleCredentials.getFile().getAbsolutePath());
    }

    public String detectIntentTexts(String text, String sessionId) throws IOException {
        try (SessionsClient sessionsClient = SessionsClient.create()) {
            SessionName session = SessionName.of(projectId, sessionId);

            TextInput.Builder textInput = TextInput.newBuilder().setText(text).setLanguageCode("ko-KR");
            QueryInput queryInput = QueryInput.newBuilder().setText(textInput).build();
            DetectIntentRequest request = DetectIntentRequest.newBuilder()
                    .setSession(session.toString())
                    .setQueryInput(queryInput)
                    .build();

            DetectIntentResponse response = sessionsClient.detectIntent(request);
            QueryResult queryResult = response.getQueryResult();

            System.out.println("Dialogflow Response: " + queryResult.getFulfillmentText());
            return queryResult.getFulfillmentText();
        }
    }
}
*/
