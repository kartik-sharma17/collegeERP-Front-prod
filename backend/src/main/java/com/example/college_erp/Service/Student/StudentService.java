package com.example.college_erp.Service.Student;

import com.example.college_erp.Model.Student.*;
import com.example.college_erp.Repo.Student.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    @Autowired
    StudentProfileRepo student;
    @Autowired
    StudentAttendenceRepo studentAttendence;
    @Autowired
    Studentresultrepo studentresult;
    @Autowired
    StudentFeeRepo studentfees;
    @Autowired
    StudentEventsRepo studentevent;


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
    public StudentResult getstudentresult(int id){
        StudentResult s3 = new StudentResult();
        s3 = studentresult.findById(id).get();
        return s3;
    }



//    to fetch student fee structure
    public StudentFees getStudentFee(int id){
        return studentfees.findById(id).get();
    }


//    to fetch the events
    public List<StudentEvents> getevents(){
         return studentevent.findAll();
    }


}
