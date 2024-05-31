package com.project.sgda.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.sgda.entity.Ong;
import com.project.sgda.repository.OngRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class OngService {

	@Autowired(required = false)
	private OngRepository ongRepository;
	
	public Ong getById(Long id) {
		return getOngRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
	}
	
	public void post(Ong ong) {
		getOngRepository().save(ong);
	}
	
	public List<Ong> getAll(){
		return getOngRepository().findAll();
	}
	
	public void delete(Long id) {
		Ong ong = getOngRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
		if(ong != null) {
			getOngRepository().deleteById(id);
		}
	}
	
	public void update(Long id, Ong ong) {
		Ong oong = getOngRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
		oong.setNome(ong.getNome());
		oong.setDescricao(ong.getDescricao());
		oong.setEmail(ong.getEmail());
		oong.setTelefone(ong.getTelefone());
		oong.setCidade(ong.getCidade());
		oong.setEstado(ong.getEstado());
		oong.setEndereco(ong.getEndereco());
		getOngRepository().save(oong);
	}
	
	public OngRepository getOngRepository() {
		return this.ongRepository;
	}
}
