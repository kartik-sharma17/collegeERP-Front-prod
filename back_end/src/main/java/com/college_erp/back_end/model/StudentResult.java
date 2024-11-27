package com.college_erp.back_end.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class StudentResult {
    @Id
    private int Studentid;
    private String sub1;
    private int sub1_marks;
    private String sub2;
    private int sub2_marks;
    private String sub3;
    private int sub3_marks;
    private String sub4;
    private int sub4_marks;
    private String sub5;
    private int sub5_marks;
    private String sub6;
    private int sub6_marks;
    private String sub7;
    private int sub7_marks;
    private String sub8;
    private int sub8_marks;
    private String sub9;
    private int sub9_marks;
    private String sub10;
    private int sub10_marks;

    public int getStudentid() {
        return Studentid;
    }

    public void setStudentid(int studentid) {
        Studentid = studentid;
    }

    public String getSub1() {
        return sub1;
    }

    public void setSub1(String sub1) {
        this.sub1 = sub1;
    }

    public int getSub1_marks() {
        return sub1_marks;
    }

    public void setSub1_marks(int sub1_marks) {
        this.sub1_marks = sub1_marks;
    }

    public String getSub2() {
        return sub2;
    }

    public void setSub2(String sub2) {
        this.sub2 = sub2;
    }

    public int getSub2_marks() {
        return sub2_marks;
    }

    public void setSub2_marks(int sub2_marks) {
        this.sub2_marks = sub2_marks;
    }

    public String getSub3() {
        return sub3;
    }

    public void setSub3(String sub3) {
        this.sub3 = sub3;
    }

    public int getSub3_marks() {
        return sub3_marks;
    }

    public void setSub3_marks(int sub3_marks) {
        this.sub3_marks = sub3_marks;
    }

    public String getSub4() {
        return sub4;
    }

    public void setSub4(String sub4) {
        this.sub4 = sub4;
    }

    public int getSub4_marks() {
        return sub4_marks;
    }

    public void setSub4_marks(int sub4_marks) {
        this.sub4_marks = sub4_marks;
    }

    public String getSub5() {
        return sub5;
    }

    public void setSub5(String sub5) {
        this.sub5 = sub5;
    }

    public int getSub5_marks() {
        return sub5_marks;
    }

    public void setSub5_marks(int sub5_marks) {
        this.sub5_marks = sub5_marks;
    }

    public String getSub6() {
        return sub6;
    }

    public void setSub6(String sub6) {
        this.sub6 = sub6;
    }

    public int getSub6_marks() {
        return sub6_marks;
    }

    public void setSub6_marks(int sub6_marks) {
        this.sub6_marks = sub6_marks;
    }

    public String getSub7() {
        return sub7;
    }

    public void setSub7(String sub7) {
        this.sub7 = sub7;
    }

    public int getSub7_marks() {
        return sub7_marks;
    }

    public void setSub7_marks(int sub7_marks) {
        this.sub7_marks = sub7_marks;
    }

    public String getSub8() {
        return sub8;
    }

    public void setSub8(String sub8) {
        this.sub8 = sub8;
    }

    public int getSub8_marks() {
        return sub8_marks;
    }

    public void setSub8_marks(int sub8_marks) {
        this.sub8_marks = sub8_marks;
    }

    public String getSub9() {
        return sub9;
    }

    public void setSub9(String sub9) {
        this.sub9 = sub9;
    }

    public int getSub9_marks() {
        return sub9_marks;
    }

    public void setSub9_marks(int sub9_marks) {
        this.sub9_marks = sub9_marks;
    }

    public String getSub10() {
        return sub10;
    }

    public void setSub10(String sub10) {
        this.sub10 = sub10;
    }

    public int getSub10_marks() {
        return sub10_marks;
    }

    public void setSub10_marks(int sub10_marks) {
        this.sub10_marks = sub10_marks;
    }
}
