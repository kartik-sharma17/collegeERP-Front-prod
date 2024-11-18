package com.college_erp.back_end.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegisteredStudents {

    @Id
    private int student_id;
    private String name;
    private Date dob;
    private String email;
    private int semester;
    private String course;
    private String branch;
    private long number;
    private long university_number;
    private long mather_number;
    private long father_number;
    private String password;
}
