package com.college_erp.back_end.Service.Student;

import com.college_erp.back_end.model.Student.StudentProfile;
import com.college_erp.back_end.repo.Student.StudentProfilerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentProfileService {

    @Autowired
    StudentProfilerepo profileRP;

    public StudentProfile getStudentprofile(int id){
        return profileRP.findById(id).get();
    }
}
