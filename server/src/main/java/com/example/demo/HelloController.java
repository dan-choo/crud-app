package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloController {
	@GetMapping("/")
	public String index() {
		return "Wow this is very cool!";
	}

	@GetMapping("/hello")
	public String hello() {
		return "Hello there!";
	}
}
