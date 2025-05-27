package com.example.college_erp.Controller;

import com.example.college_erp.Model.User.Login;
import com.example.college_erp.Model.User.LoginDetails;
import com.example.college_erp.Service.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("login")
    public LoginDetails UserLogin(@RequestBody Login data){
        return userService.userLogin(data);
    }
}
