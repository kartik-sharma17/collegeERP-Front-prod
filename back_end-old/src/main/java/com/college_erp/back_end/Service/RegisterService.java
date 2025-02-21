package com.college_erp.back_end.Service;


import com.college_erp.back_end.model.Login_details;
import com.college_erp.back_end.model.Register_details;
import com.college_erp.back_end.model.RegisteredStudents;
import com.college_erp.back_end.repo.RegisterRepo;
import com.college_erp.back_end.repo.RegisterStudentrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegisterService {


    @Autowired
    RegisterStudentrepo Registered_student_repo;
    RegisterRepo register_repo;


    public boolean Register_new_student(RegisteredStudents details){
        Registered_student_repo.save(details);
        return true;
    }

    public List<Register_details> giveallstudent(){
        return register_repo.findAll();
    }


    public boolean login_check(int username, String pass){
        Register_details user;


        user = register_repo.findById(username).orElse(new Register_details());

        String pass1 = null;
        try{
            pass1 = user.getPassword();
            if(pass1.equals(pass)){
                return true;
            }
            else{
                return false;
            }
        }
        catch(Exception e){
            return false;
        }

    }
}
