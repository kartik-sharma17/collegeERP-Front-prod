package com.example.college_erp.Repo.Faculty;

import com.example.college_erp.Model.Faculty.FacultyProfile;
import com.example.college_erp.Service.Faculty.FacultyService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface facultyProfilerepo extends JpaRepository<FacultyProfile,Integer> {

}
