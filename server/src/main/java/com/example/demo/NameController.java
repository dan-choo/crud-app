package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NameController {

    @Autowired
    private NameService nameService;

    @GetMapping("/names")
    public List<Name> get_all_names() {
        return nameService.getAllNames();
    }

    @PostMapping("/name")
    public void add_name(@RequestBody Name name) {
        nameService.addName(name);
    }


}
