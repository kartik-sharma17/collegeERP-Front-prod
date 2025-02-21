package com.example.college_erp.Service.Student;

import com.example.college_erp.Model.Student.StudentAttendence;
import com.example.college_erp.Model.Student.StudentProfile;
import com.example.college_erp.Repo.Student.StudentAttendenceRepo;
import com.example.college_erp.Repo.Student.StudentProfileRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService {

    @Autowired
    StudentProfileRepo student;
    @Autowired
    StudentAttendenceRepo studentAttendence;

//    to fetch student profile
    public StudentProfile getStudentProfile(int id){
        StudentProfile s1 = new StudentProfile();
        s1 = student.findById(id).get();
        return s1;
    }


//    to fetch student attendence
    public StudentAttendence getStudentAttendence(int id){
        StudentAttendence s2 = new StudentAttendence();
        s2 = studentAttendence.findById(id).get();
        return s2;
    }

//    to fetch student result






//    to fetch student fee structure




//    to fetch the events 


}
