package com.example.college_erp.Model.Student;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class StudentFees {
    @Id
    private int studentid;
    private int TotalFee;
    private int RemainingFee;

    public int getStudentid() {
        return studentid;
    }

    public void setStudentid(int studentid) {
        this.studentid = studentid;
    }

    public int getTotalFee() {
        return TotalFee;
    }

    public void setTotalFee(int totalFee) {
        TotalFee = totalFee;
    }

    public int getRemainingFee() {
        return RemainingFee;
    }

    public void setRemainingFee(int remainingFee) {
        RemainingFee = remainingFee;
    }
}
