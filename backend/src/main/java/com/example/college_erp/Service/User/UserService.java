package com.example.college_erp.Service.User;

import com.example.college_erp.Model.User.Login;
import com.example.college_erp.Model.User.LoginDetails;
import com.example.college_erp.Repo.User.Userrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    Userrepo userRepo;

    public LoginDetails userLogin(Login data){
        LoginDetails Response = new LoginDetails();
        Login user = new Login();
        user = userRepo.findById(data.getUserID()).orElse(null);
        if(user == null){
            Response.setUserId(data.getUserID());
            Response.setMessage("No User Found");
            Response.setToken(null);
            return Response;
        }
        else if(user.getPassword().equals(data.getPassword())){
            Response.setUserId(data.getUserID());
            Response.setMessage("Login Successfully");
            Response.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZHVtbXkiLCJpYXQiOjE2ODUwMDAwMDB9.dQw4w9WgXcQKZz2dWkT-abc1234567890xyzDummy");
            return Response;
        }
        else {
            Response.setUserId(data.getUserID());
            Response.setMessage("Wrong Password");
            Response.setToken(null);
            return Response;
        }
    }
}
