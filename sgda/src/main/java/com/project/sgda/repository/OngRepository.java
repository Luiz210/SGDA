package com.project.sgda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.sgda.entity.Ong;

@Repository
public interface OngRepository extends JpaRepository<Ong, Long>{

}
