package com.project.sgda.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.sgda.entity.Doacao;
import com.project.sgda.entity.Usuario;

@Repository
public interface DoacaoRepository extends JpaRepository<Doacao, Long>{

	List<Doacao> getByUsuario(Usuario usuario);
}
