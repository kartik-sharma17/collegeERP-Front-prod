package com.example.college_erp.Model.Student;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.validation.beanvalidation.SpringConstraintValidatorFactory;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class StudentEvents {
    @Id
    private int eventid;
    private String eventHeading;
    private String eventBody;
    private String eventLink;
}
