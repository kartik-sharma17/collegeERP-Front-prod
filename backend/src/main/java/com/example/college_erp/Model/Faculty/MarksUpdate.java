package com.example.college_erp.Model.Faculty;

public class MarksUpdate {
//    sessional  == 4 means put

    private int studentId;
    private int sessionalNo;
    private String s1;
    private int s1marks;
    private String s2;
    private int s2marks;
    private String s3;
    private int s3marks;
    private String s4;
    private int s4marks;
    private String s5;
    private int s5marks;
    private String s6;
    private int s6marks;

    public int getStudentId() {
        return studentId;
    }

    public void setStudentId(int studentId) {
        this.studentId = studentId;
    }

    @Override
    public String toString() {
        return "MarksUpdate{" +
                "studentId=" + studentId +
                ", sessionalNo=" + sessionalNo +
                ", s1='" + s1 + '\'' +
                ", s1marks=" + s1marks +
                ", s2='" + s2 + '\'' +
                ", s2marks=" + s2marks +
                ", s3='" + s3 + '\'' +
                ", s3marks=" + s3marks +
                ", s4='" + s4 + '\'' +
                ", s4marks=" + s4marks +
                ", s5='" + s5 + '\'' +
                ", s5marks=" + s5marks +
                ", s6='" + s6 + '\'' +
                ", s6marks=" + s6marks +
                '}';
    }

    public int getSessionalNo() {
        return sessionalNo;
    }

    public void setSessionalNo(int sessionalNo) {
        this.sessionalNo = sessionalNo;
    }

    public String getS1() {
        return s1;
    }

    public void setS1(String s1) {
        this.s1 = s1;
    }

    public int getS1marks() {
        return s1marks;
    }

    public void setS1marks(int s1marks) {
        this.s1marks = s1marks;
    }

    public String getS2() {
        return s2;
    }

    public void setS2(String s2) {
        this.s2 = s2;
    }

    public int getS2marks() {
        return s2marks;
    }

    public void setS2marks(int s2marks) {
        this.s2marks = s2marks;
    }

    public String getS3() {
        return s3;
    }

    public void setS3(String s3) {
        this.s3 = s3;
    }

    public int getS3marks() {
        return s3marks;
    }

    public void setS3marks(int s3marks) {
        this.s3marks = s3marks;
    }

    public String getS4() {
        return s4;
    }

    public void setS4(String s4) {
        this.s4 = s4;
    }

    public int getS4marks() {
        return s4marks;
    }

    public void setS4marks(int s4marks) {
        this.s4marks = s4marks;
    }

    public String getS5() {
        return s5;
    }

    public void setS5(String s5) {
        this.s5 = s5;
    }

    public int getS5marks() {
        return s5marks;
    }

    public void setS5marks(int s5marks) {
        this.s5marks = s5marks;
    }

    public String getS6() {
        return s6;
    }

    public void setS6(String s6) {
        this.s6 = s6;
    }

    public int getS6marks() {
        return s6marks;
    }

    public void setS6marks(int s6marks) {
        this.s6marks = s6marks;
    }
}
