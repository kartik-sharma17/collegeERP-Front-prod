package com.college_erp.back_end.Controller;


import com.college_erp.back_end.Service.RegisterService;
import com.college_erp.back_end.model.Login_details;
import com.college_erp.back_end.model.Register_details;
import com.college_erp.back_end.model.RegisteredStudents;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class LoginController {

    @Autowired
    RegisterService rs;


    @CrossOrigin
    @PostMapping("login")
    public boolean Login_home(@RequestBody Login_details detials){
        return rs.login_check(detials.getUsername(),detials.getPassword());
    }



    @PostMapping("register/student")
    public boolean register(@RequestBody RegisteredStudents details){
        System.out.println(details);
        return rs.Register_new_student(details);
    }

}
