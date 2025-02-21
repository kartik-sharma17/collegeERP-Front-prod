package com.example.college_erp.Controller;

import com.example.college_erp.Model.Student.StudentAttendence;
import com.example.college_erp.Model.Student.StudentProfile;
import com.example.college_erp.Service.Student.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    StudentService studentService;

    @GetMapping("dashboard/student/profile/{id}")
    public StudentProfile return_student_profil(@PathVariable int id){
        System.out.println(id);
        return studentService.getStudentProfile(id);
    }

    @GetMapping("dashboard/student/attendence/{id}")
    public StudentAttendence getStudentAttendence(@PathVariable int id){
        return studentService.getStudentAttendence(id);
    }

}
