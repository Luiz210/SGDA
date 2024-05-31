package com.project.sgda.repository;

import java.util.Collection;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.sgda.entity.Alimento;
import com.project.sgda.entity.Usuario;

@Repository
public interface AlimentoRepository extends JpaRepository<Alimento, Long>{

	Collection<Alimento> getByUsuarioAndStatus(Usuario usuario, boolean status);
	List<Alimento> getByStatus(boolean status);
	
}

