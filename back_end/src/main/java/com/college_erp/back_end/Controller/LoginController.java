package com.college_erp.back_end.Controller;


import com.college_erp.back_end.Service.RegisterService;
import com.college_erp.back_end.model.Login_details;
import com.college_erp.back_end.model.Register_details;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;

@RestController
public class LoginController {

    @Autowired
    RegisterService rs;

    @GetMapping("login")
    public boolean Login_home(@RequestBody Login_details detials){
        return rs.login_check(detials.getUsername(),detials.getPassword());
    }


    @PostMapping("register")
    public boolean register(@RequestBody Register_details details){
        System.out.println(details);
        return rs.Regster_student_details(details);
    }



}
