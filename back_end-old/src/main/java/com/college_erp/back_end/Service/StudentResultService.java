package com.college_erp.back_end.Service;


import com.college_erp.back_end.model.StudentResult;
import com.college_erp.back_end.repo.StudentResultrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentResultService {

    @Autowired
    StudentResultrepo rp;

    public StudentResult getstudentresult(int id){
        return rp.findById(id).get();
    }
}
