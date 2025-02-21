package com.college_erp.back_end.Controller.Student;

import com.college_erp.back_end.Service.Student.StudentProfileService;
import com.college_erp.back_end.model.Student.StudentProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentdataController {

    @Autowired
    StudentProfileService profileSer;

    @GetMapping("Dashboard/student/{id}")
    public StudentProfile getprofile(@PathVariable int id){
        return profileSer.getStudentprofile(id);
    }



}
