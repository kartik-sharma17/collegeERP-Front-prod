package com.college_erp.back_end.Service;


import com.college_erp.back_end.model.RegisteredStudents;
import com.college_erp.back_end.repo.RegisterStudentrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FetchService {

    @Autowired
    RegisterStudentrepo registerStudentrepo;

    @Autowired
    RegisteredStudents s1;


    public RegisteredStudents getstudentdetails(int id){
        s1 = registerStudentrepo.findById(id).get();
        s1.setPassword("");
        return s1;
    }

}
