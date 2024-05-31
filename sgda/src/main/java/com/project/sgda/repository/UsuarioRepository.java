package com.project.sgda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.sgda.entity.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long>{

	public Usuario getByUsuarioAndCnpjAndSenha(String usuario, String cnpj, String senha);
}