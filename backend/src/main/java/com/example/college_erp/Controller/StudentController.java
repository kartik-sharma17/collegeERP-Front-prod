package com.example.college_erp.Controller;

import com.example.college_erp.Model.Student.*;
import com.example.college_erp.Repo.Student.StudentEventsRepo;
import com.example.college_erp.Service.Student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    StudentService studentService;

//    getting the data from profile
    @GetMapping("dashboard/student/profile/{id}")
    public StudentProfile return_student_profil(@PathVariable int id){
        System.out.println(id);
        return studentService.getStudentProfile(id);
    }

//    getting the attendence
    @GetMapping("dashboard/student/attendence/{id}")
    public StudentAttendence getStudentAttendence(@PathVariable int id){
        return studentService.getStudentAttendence(id);
    }

//    getting the result
    @GetMapping("dashboard/student/result/{id}")
    public StudentResult getStudentresult(@PathVariable int id){
        return studentService.getstudentresult(id);
    }

//    getting the Fees Structure
    @GetMapping("dashboard/student/fee/{id}")
    public StudentFees getstudentfee(@PathVariable int id){
        return studentService.getStudentFee(id);
    }

//  getting the events
    @GetMapping("dashboard/student/events")
    public List<StudentEvents> getstudentevents(){
        return studentService.getevents();
    }
}
