package com.example.college_erp.Model.Faculty;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class FacultyProfile {
    @Id
    private int id;
    private String name;
    private String Position;
    private int number;
    private String allotedSubject;
    private String section;
    private String email;

    @Override
    public String toString() {
        return "FacultyProfile{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", Position='" + Position + '\'' +
                ", number=" + number +
                ", allotedSubject='" + allotedSubject + '\'' +
                ", section='" + section + '\'' +
                ", email='" + email + '\'' +
                ", department='" + department + '\'' +
                '}';
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPosition() {
        return Position;
    }

    public void setPosition(String position) {
        Position = position;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getAllotedSubject() {
        return allotedSubject;
    }

    public void setAllotedSubject(String allotedSubject) {
        this.allotedSubject = allotedSubject;
    }

    public String getSection() {
        return section;
    }

    public void setSection(String section) {
        this.section = section;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    private String department;

}
