package com.project.sgda.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.sgda.entity.Doacao;
import com.project.sgda.entity.Usuario;
import com.project.sgda.repository.DoacaoRepository;
import com.project.sgda.repository.UsuarioRepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class DoacaoService {
	
	@Autowired(required=false)
	private DoacaoRepository doacaoRepository;
	
	@Autowired(required = false)
	private UsuarioRepository usuarioRepository;
	
	public List<Doacao> getAll(){
		return getDoacaoRepository().findAll();
	}
	
	public List<Doacao> getAllById(Long usuario_id){
		Usuario usuario = getUsuarioRepository().findById(usuario_id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
		return getDoacaoRepository().getByUsuario(usuario);
	}
	
	public void post(Doacao doacao) {
		getDoacaoRepository().save(doacao);
	}
 	
	public DoacaoRepository getDoacaoRepository() {
		return this.doacaoRepository;
	}
	
	public UsuarioRepository getUsuarioRepository() {
		return this.usuarioRepository;
	}
}
