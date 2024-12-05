package com.college_erp.back_end.model.Student;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class StudentProfile {

    @Id
    private int studentId;
    private String fullName;
    private int number;
    private Date DOB;
    private String Gender;
    private String Email;
    private String Address;
    private String classAndsection;
    private int enrollmentNo;
    private int universityNo;
    private String branch;
    private String Course;
    private String year;
    private String guardianName;
    private String guardianContactNo;
    private String guardianRelation;
    private int roomNo;
    private int busid;
}
