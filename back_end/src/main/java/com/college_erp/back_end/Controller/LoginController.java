package com.college_erp.back_end.Controller;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {



    @RequestMapping("login")
    public String Login_home(){
        return "Hello world";
    }


}
