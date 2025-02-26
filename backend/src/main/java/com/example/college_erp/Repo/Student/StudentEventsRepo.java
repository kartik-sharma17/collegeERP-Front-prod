package com.example.college_erp.Repo.Student;

import com.example.college_erp.Model.Student.StudentEvents;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentEventsRepo extends JpaRepository<StudentEvents,Integer> {
}
