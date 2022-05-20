package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

@Service
public class UserService {

    // Initialize with dummy data
    private List<User> userList = new ArrayList<>(Arrays.asList(
    ));

    public void addUser(User user) {
        userList.add(user);
    }
    
    public List<User> getAllUsers() {
        return userList;
    }
}
