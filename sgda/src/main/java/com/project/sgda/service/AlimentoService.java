package com.project.sgda.service;

import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.sgda.dto.AlimentoDTO;
import com.project.sgda.entity.Alimento;
import com.project.sgda.entity.Usuario;
import com.project.sgda.repository.AlimentoRepository;
import com.project.sgda.repository.UsuarioRepository;
import com.project.sgda.utils.AlimentoMapper;

import jakarta.persistence.EntityNotFoundException;

@Service
public class AlimentoService {

	@Autowired(required = false)
	private AlimentoRepository alimentoRepository;
	
	@Autowired(required = false)
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private AlimentoMapper alimentoMapper;
	
	public void post(Alimento alimento) { 
		getAlimentoRepository().save(alimento);
	}
	
	public Alimento delete(Long id) {
		Alimento alimento = getAlimentoRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
		if(alimento != null) {
			getAlimentoRepository().deleteById(id);
		}
		return alimento;
	}
	
	public Collection<Alimento> getByUsuarioAndStatus(Long usuario_id, boolean status){
		Usuario usuario = getUsuarioRepository().findById(usuario_id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
		return getAlimentoRepository().getByUsuarioAndStatus(usuario, status);
	}
	
	public List<Alimento> getByStatus(boolean status){
		return getAlimentoRepository().getByStatus(status);
	}
	
	public List<Alimento> getAll(){
		return getAlimentoRepository().findAll();
	}
	
	public Alimento getById(Long id) {
		return getAlimentoRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
	}
	
	public void update(Long id, Alimento alimento) {
		Alimento aalimento = getAlimentoRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
		aalimento.setName(alimento.getName());
		aalimento.setQuantity(alimento.getQuantity());
		aalimento.setPrice(alimento.getPrice());
		aalimento.setDataCadastro(alimento.getDataCadastro());
		aalimento.setDataValidade(alimento.getDataValidade());
		aalimento.setStatus(aalimento.isStatus());
		aalimento.setUsuario(aalimento.getUsuario());
		getAlimentoRepository().save(aalimento);

	}
	
	public void updateStatus(Long id, boolean status) {
		Alimento alimento = getAlimentoRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
		alimento.setStatus(status);
		getAlimentoRepository().save(alimento);
	}
	
	public AlimentoRepository getAlimentoRepository() {
		return this.alimentoRepository;
	}
	
	public UsuarioRepository getUsuarioRepository() {
		return this.usuarioRepository;
	}
	
	public AlimentoMapper getAlimentoMapper() {
		return this.alimentoMapper;
	}
}
