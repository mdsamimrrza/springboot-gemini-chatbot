package com.chatBot.chatbot.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestClient;

@Configuration
public class geminiConfiguration {

    @Value("${gemini.api.url}")
    private String url;

    @Bean
    public RestClient restClient() {
        return RestClient.builder()
                .baseUrl(url)
                .build();
    }
}
