package com.project.sgda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.sgda.entity.Direcionar;

@Repository
public interface DirecionarRepository extends JpaRepository<Direcionar, Long>{

}
