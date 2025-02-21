package com.example.college_erp.Repo.Student;

import com.example.college_erp.Model.Student.StudentAttendence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentAttendenceRepo extends JpaRepository<StudentAttendence,Integer> {
}
