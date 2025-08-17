package com.chatBot.chatbot.controller;

import com.chatBot.chatbot.dto.promptRequest;
import com.chatBot.chatbot.dto.promptRequest;
import com.chatBot.chatbot.service.geminiService;
import com.chatBot.chatbot.service.geminiService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/chat")
public class geminiController {

    private final geminiService geminiService;

    public geminiController(geminiService geminiService) {
        this.geminiService = geminiService;
    }

    @PostMapping
    public String chat(@RequestBody promptRequest request) {
        return geminiService.geminiChatResponse(request);
    }
}
