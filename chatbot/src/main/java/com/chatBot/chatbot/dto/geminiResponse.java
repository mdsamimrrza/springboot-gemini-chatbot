package com.chatBot.chatbot.dto;

import java.util.List;

public record geminiResponse(List<Candidate> candidates) {
    public record Candidate(Content content) {}
    public record Content(List<Part> parts) {}
    public record Part(String text) {}
}
