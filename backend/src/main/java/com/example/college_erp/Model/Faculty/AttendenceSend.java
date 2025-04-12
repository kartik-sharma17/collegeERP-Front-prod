package com.example.college_erp.Model.Faculty;

public class AttendenceSend {
    private int studentId;
    private String studentName;

    public int getStudentId() {
        return studentId;
    }

    @Override
    public String toString() {
        return "AttendenceSend{" +
                "studentId=" + studentId +
                ", studentName='" + studentName + '\'' +
                '}';
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }
}
