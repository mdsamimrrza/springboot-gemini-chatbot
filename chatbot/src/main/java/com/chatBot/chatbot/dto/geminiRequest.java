package com.chatBot.chatbot.dto;

import java.util.List;

public record geminiRequest(List<Content> contents) {
    public record Content(List<Part> parts) {

    }
    public record Part(String text) {

    }
}
