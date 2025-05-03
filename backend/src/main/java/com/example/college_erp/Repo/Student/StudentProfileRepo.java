package com.example.college_erp.Repo.Student;

import com.example.college_erp.Model.Student.StudentProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentProfileRepo extends JpaRepository<StudentProfile,Integer> {
}
