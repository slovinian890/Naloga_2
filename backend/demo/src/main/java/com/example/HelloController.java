package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"}) // React/Vite
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello from backend!";
    }
}