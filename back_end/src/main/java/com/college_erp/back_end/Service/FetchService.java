package com.college_erp.back_end.Service;


import com.college_erp.back_end.model.RegisteredStudents;
import com.college_erp.back_end.repo.RegisterStudentrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class FetchService {

    @Autowired
    RegisterStudentrepo registerStudentrepo;


    public Optional<RegisteredStudents> getstudentdetails(int id){
        return registerStudentrepo.findById(id);
    }

}
