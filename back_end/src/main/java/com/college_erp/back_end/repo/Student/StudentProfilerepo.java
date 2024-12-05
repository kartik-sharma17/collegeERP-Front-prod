package com.college_erp.back_end.repo.Student;

import com.college_erp.back_end.model.Student.StudentProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentProfilerepo extends JpaRepository<StudentProfile, Integer > {
}
