package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllNames() {
        return userRepository.findAll();
    }

    @PostMapping("/add")
    public @ResponseBody String addUser(@RequestParam String name, @RequestParam String email,
            @RequestParam String job) {
        User user = new User();
        user.setUserName(name);
        user.setUserEmail(email);
        user.setUserJob(job);
        userRepository.save(user);
        return "Saved";
    }
}
