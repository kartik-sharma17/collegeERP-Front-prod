package com.college_erp.back_end.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Component
public class RegisteredStudents {

    @Id
    private int student_id;
    private String name;
    private Date dob;
    private String email;

    @Override
    public String toString() {
        return "RegisteredStudents{" +
                "student_id=" + student_id +
                ", name='" + name + '\'' +
                ", dob=" + dob +
                ", email='" + email + '\'' +
                ", semester=" + semester +
                ", course='" + course + '\'' +
                ", branch='" + branch + '\'' +
                ", number=" + number +
                ", university_number=" + university_number +
                ", mother_number=" + mother_number +
                ", father_number=" + father_number +
                ", password='" + password + '\'' +
                '}';
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    private int semester;
    private String course;
    private String branch;
    private long number;
    private long university_number;
    private long mother_number;
    private long father_number;
    private String password;
}
