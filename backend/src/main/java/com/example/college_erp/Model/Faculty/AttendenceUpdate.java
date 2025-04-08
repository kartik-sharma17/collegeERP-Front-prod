package com.example.college_erp.Model.Faculty;


public class AttendenceUpdate {
    private int id;
    private int day;
    private int attendence;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "AttendenceUpdate{" +
                "id=" + id +
                ", day=" + day +
                ", attendence='" + attendence + '\'' +
                '}';
    }

    public int getDay() {
        return day;
    }

    public void setDay(int day) {
        this.day = day;
    }

    public int getAttendence() {
        return attendence;
    }

    public void setAttendence(int attendence) {
        this.attendence = attendence;
    }
}
