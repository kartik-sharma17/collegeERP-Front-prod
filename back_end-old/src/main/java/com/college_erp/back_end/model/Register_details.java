package com.college_erp.back_end.model;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Register_details {

    @Id
    private int student_id;
    private String name;
    private String email;
    private int p_number;
    private Date dob;
    private String password;

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "Register_details{" +
                "student_id=" + student_id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", p_number=" + p_number +
                ", dob=" + dob +
                ", password='" + password + '\'' +
                '}';
    }
}
