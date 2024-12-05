package com.college_erp.back_end.Controller.Student;

import com.college_erp.back_end.Service.StudentResultService;
import com.college_erp.back_end.model.StudentResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentResultController {

    @Autowired
    StudentResultService ser;

//    to fetch the result
    @GetMapping("dashboard/student/result/{id}")
    public StudentResult getresult(@PathVariable int id){
        return ser.getstudentresult(id);
    }
}
