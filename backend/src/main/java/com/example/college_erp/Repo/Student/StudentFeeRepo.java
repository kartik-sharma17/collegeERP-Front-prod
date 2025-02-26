package com.example.college_erp.Repo.Student;

import com.example.college_erp.Model.Student.StudentFees;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentFeeRepo extends JpaRepository<StudentFees,Integer> {
}
