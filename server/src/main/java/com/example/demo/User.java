package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;
    private String userName;
    private String userEmail;
    private String userJob;

    public User () {}

    public User (Integer id, String userName, String userEmail, String userJob) {
        this.id = id;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userJob = userJob;
    }

    public Integer getID() {
        return id;
    }

    public void setID(Integer id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String name) {
        this.userName = name;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String email) {
        this.userEmail = email;
    }

    public String getUserJobj() {
        return userJob;
    }

    public void setUserJob(String job) {
        this.userJob = job;
    }
}
