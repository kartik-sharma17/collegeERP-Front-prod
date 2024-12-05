package com.college_erp.back_end.Controller.Student;


import com.college_erp.back_end.Service.FetchService;
import com.college_erp.back_end.model.RegisteredStudents;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class FetchDataController {

    @Autowired
    FetchService rp;

    @Autowired
    RegisteredStudents s1 ;

    @GetMapping("student/{id}")
    public RegisteredStudents getstudentDetails(@PathVariable int id){
        return rp.getstudentdetails(id);
    }
}
