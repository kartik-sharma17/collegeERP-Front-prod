package com.example.college_erp.Repo.User;

import com.example.college_erp.Model.User.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Userrepo extends JpaRepository<Login,Integer> {

}
