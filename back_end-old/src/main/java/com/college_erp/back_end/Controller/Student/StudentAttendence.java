package com.college_erp.back_end.Controller.Student;


import com.college_erp.back_end.Service.StudentAttendenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class StudentAttendence {

    @Autowired
    StudentAttendenceService ser;


//    to get the  attendence of student
    @GetMapping("dashboard/student/attendence/{id}")
    public Optional<com.college_erp.back_end.model.StudentAttendence> getAttendence(@PathVariable int id){
        System.out.println("hello");
        System.out.println(id);
        return ser.getstudentattendenceservice(id);
    }


//    to uplaod the attendence of a student
    @GetMapping("update/student/{atten}")
    public boolean updateStudentAttendence(@PathVariable String atten){
        ser.updateStudentAttendenceService(atten);
        return true;
    }


    @SpringBootApplication
    public static class BackEndApplication {

        public static void main(String[] args) {
            SpringApplication.run(BackEndApplication.class, args);
        }



    }
}
