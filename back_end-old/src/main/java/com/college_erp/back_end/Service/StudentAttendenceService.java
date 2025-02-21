package com.college_erp.back_end.Service;


import com.college_erp.back_end.model.StudentAttendence;
import com.college_erp.back_end.repo.StudentAttendencerepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

import static java.lang.Integer.parseInt;

@Service
public class StudentAttendenceService {

    @Autowired
    StudentAttendencerepo rp;

    public Optional<StudentAttendence> getstudentattendenceservice(int id){
        return rp.findById(id);
    }


    public boolean updateStudentAttendenceService(String atten){
        String regx = "[//-]";
        String [] splitted = atten.split(regx);
        int studentid = parseInt(splitted[0]);
        int attendence = parseInt(splitted[1]);
        int date = parseInt(splitted[2]);
        StudentAttendence s1 = new StudentAttendence();
        s1 = rp.findById(studentid).get();
        if(date == 1){
            s1.setD1(1);
            rp.save(s1);
            return true;
        } else if (date == 2) {
            s1.setD2(1);
            rp.save(s1);
            return true;
        } else if (date == 3) {
            s1.setD3(1);
            rp.save(s1);
            return true;
        } else if (date == 4) {
            s1.setD4(1);
            rp.save(s1);
            return true;
        } else if (date == 5) {
            s1.setD5(1);
            rp.save(s1);
            return true;
        } else if (date == 6) {
            s1.setD6(1);
            rp.save(s1);
            return true;
        } else if (date == 7) {
            s1.setD7(1);
            rp.save(s1);
            return true;
        } else if (date == 8) {
            s1.setD8(1);
            rp.save(s1);
            return true;
        } else if (date == 9) {
            s1.setD9(1);
            rp.save(s1);
            return true;
        } else if (date == 10) {
            s1.setD10(1);
            rp.save(s1);
            return true;
        } else if (date == 11) {
            s1.setD11(1);
            rp.save(s1);
            return true;
        } else if (date == 12) {
            s1.setD12(1);
            rp.save(s1);
            return true;
        } else if (date == 13) {
            s1.setD13(1);
            rp.save(s1);
            return true;
        } else if (date == 14) {
            s1.setD14(1);
            rp.save(s1);
            return true;
        } else if (date == 15) {
            s1.setD15(1);
            rp.save(s1);
            return true;
        } else if (date == 16) {
            s1.setD16(1);
            rp.save(s1);
            return true;
        } else if (date == 17) {
            s1.setD17(1);
            rp.save(s1);
            return true;
        } else if (date == 18) {
            s1.setD18(1);
            rp.save(s1);
            return true;
        } else if (date == 19) {
            s1.setD19(1);
            rp.save(s1);
            return true;
        } else if (date == 20) {
            s1.setD20(1);
            rp.save(s1);
            return true;
        } else if (date == 21) {
            s1.setD21(1);
            rp.save(s1);
            return true;
        } else if (date == 22) {
            s1.setD22(1);
            rp.save(s1);
            return true;
        } else if (date == 23) {
            s1.setD23(1);
            rp.save(s1);
            return true;
        } else if (date == 24) {
            s1.setD24(1);
            rp.save(s1);
            return true;
        } else if (date == 25) {
            s1.setD25(1);
            rp.save(s1);
            return true;
        } else if (date == 26) {
            s1.setD26(1);
            rp.save(s1);
            return true;
        } else if (date == 27) {
            s1.setD27(1);
            rp.save(s1);
            return true;
        } else if (date == 28) {
            s1.setD28(1);
            rp.save(s1);
            return true;
        } else if (date == 29) {
            s1.setD29(1);
            rp.save(s1);
            return true;
        } else if (date == 30) {
            s1.setD30(1);
            rp.save(s1);
            return true;
        } else if (date == 31) {
            s1.setD31(1);
            rp.save(s1);
            return true;
        }else{
            return false;
        }
    }
}
