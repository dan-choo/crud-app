package com.example.demo;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

@Service
public class NameService {

    // Initialize with dummy data
    private List<Name> nameList = new ArrayList<>(Arrays.asList(
        new Name("1", "Dan"),
        new Name("2", "Jon"),
        new Name("3", "Alice"),
        new Name("4", "Bob")
    ));

    public void addName(Name name) {
        nameList.add(name);
    }
    
    public List<Name> getAllNames() {
        return nameList;
    }
}
