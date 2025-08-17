package com.chatBot.chatbot.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class healthCheck {

    @GetMapping("/")
    public String health(){
        return  " server is online ";
    }

    @GetMapping("/hi")
    public String  hi(){
        return  "h i";
    }

}
