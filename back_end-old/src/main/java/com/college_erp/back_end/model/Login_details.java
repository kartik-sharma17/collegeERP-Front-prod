package com.college_erp.back_end.model;



public class Login_details {
    private int username;
    private String password;

    @Override
    public String toString() {
        return "Login_details{" +
                "username=" + username +
                ", password='" + password + '\'' +
                '}';
    }

    public int getUsername() {
        return username;
    }

    public void setUsername(int username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
