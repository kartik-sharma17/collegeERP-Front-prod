package com.college_erp.back_end.repo;


import com.college_erp.back_end.model.Register_details;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface RegisterRepo extends JpaRepository< Register_details , Integer > {
}
