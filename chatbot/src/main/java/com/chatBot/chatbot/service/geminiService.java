package com.chatBot.chatbot.service;

import com.chatBot.chatbot.dto.promptRequest;
import com.chatBot.chatbot.dto.geminiRequest;
import com.chatBot.chatbot.dto.geminiResponse;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;

@Service
public class geminiService {

    private final RestClient restClient;

    public geminiService(RestClient.Builder builder) {
        this.restClient = builder.build();
    }

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.model}")
    private String model;

    public String geminiChatResponse(promptRequest promptrequest) {
        // Build request body
        geminiRequest.Part part = new geminiRequest.Part(promptrequest.prompt());
        geminiRequest.Content content = new geminiRequest.Content(List.of(part));
        geminiRequest request = new geminiRequest(List.of(content));

        // API endpoint
        String url = "https://generativelanguage.googleapis.com/v1beta/models/"
                + model
                + ":generateContent?key="
                + apiKey;

        // Make POST request using RestClient
        geminiResponse response = restClient
                .post()
                .uri(url)
                .body(request)
                .retrieve()
                .body(geminiResponse.class);

        // Extract first text response
        if (response != null && !response.candidates().isEmpty()) {
            return response.candidates()
                    .get(0)
                    .content()
                    .parts()
                    .get(0)
                    .text();
        }
        return "No response from Gemini";
    }
}
