package com.example.college_erp.Model.Student;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Component
public class StudentProfile {

    @Id
    private int studentId;
    private String fullName;
    private int number;
    private Date DOB;
    private String Gender;
    private String Email;
    private String Address;

    @Override
    public String toString() {
        return "StudentProfile{" +
                "studentId=" + studentId +
                ", fullName='" + fullName + '\'' +
                ", number=" + number +
                ", DOB=" + DOB +
                ", Gender='" + Gender + '\'' +
                ", Email='" + Email + '\'' +
                ", Address='" + Address + '\'' +
                ", classAndsection='" + classAndsection + '\'' +
                ", enrollmentNo=" + enrollmentNo +
                ", universityNo=" + universityNo +
                ", branch='" + branch + '\'' +
                ", Course='" + Course + '\'' +
                ", year='" + year + '\'' +
                ", guardianName='" + guardianName + '\'' +
                ", guardianContactNo='" + guardianContactNo + '\'' +
                ", guardianRelation='" + guardianRelation + '\'' +
                ", roomNo=" + roomNo +
                ", busid=" + busid +
                '}';
    }

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Date getDOB() {
        return DOB;
    }

    public void setDOB(Date DOB) {
        this.DOB = DOB;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public String getClassAndsection() {
        return classAndsection;
    }

    public void setClassAndsection(String classAndsection) {
        this.classAndsection = classAndsection;
    }

    public int getEnrollmentNo() {
        return enrollmentNo;
    }

    public void setEnrollmentNo(int enrollmentNo) {
        this.enrollmentNo = enrollmentNo;
    }

    public int getUniversityNo() {
        return universityNo;
    }

    public void setUniversityNo(int universityNo) {
        this.universityNo = universityNo;
    }

    public String getBranch() {
        return branch;
    }

    public void setBranch(String branch) {
        this.branch = branch;
    }

    public String getCourse() {
        return Course;
    }

    public void setCourse(String course) {
        Course = course;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getGuardianName() {
        return guardianName;
    }

    public void setGuardianName(String guardianName) {
        this.guardianName = guardianName;
    }

    public String getGuardianContactNo() {
        return guardianContactNo;
    }

    public void setGuardianContactNo(String guardianContactNo) {
        this.guardianContactNo = guardianContactNo;
    }

    public String getGuardianRelation() {
        return guardianRelation;
    }

    public void setGuardianRelation(String guardianRelation) {
        this.guardianRelation = guardianRelation;
    }

    public int getRoomNo() {
        return roomNo;
    }

    public void setRoomNo(int roomNo) {
        this.roomNo = roomNo;
    }

    public int getBusid() {
        return busid;
    }

    public void setBusid(int busid) {
        this.busid = busid;
    }

    private String classAndsection;
    private int enrollmentNo;
    private int universityNo;
    private String branch;
    private String Course;
    private String year;
    private String guardianName;
    private String guardianContactNo;
    private String guardianRelation;
    private int roomNo;
    private int busid;


}
