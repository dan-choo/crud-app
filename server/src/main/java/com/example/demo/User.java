package com.example.demo;

public class Name {

    private Integer id;
    private String userName;
    private String userEmail;
    private String userJob;

    public Name (Integer id, String userName, String userEmail, String userJob) {
        this.id = id;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userJob = userJob;
    }

    public Integer getID() {
        return id;
    }

    public String getUserName() {
        return userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public String getUserJobj() {
        return userJob;
    }
}
