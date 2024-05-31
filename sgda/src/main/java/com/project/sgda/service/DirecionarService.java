package com.project.sgda.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.sgda.entity.Direcionar;
import com.project.sgda.repository.DirecionarRepository;

@Service
public class DirecionarService {

	@Autowired(required=false)
	private DirecionarRepository direcionarRepository;
	
	public void post(Direcionar direcionar) {
		getDirecionarRepository().save(direcionar);
	}
	
	public List<Direcionar> getAll(){
		return getDirecionarRepository().findAll();
	}
	
	public void delete(Long id) {
		getDirecionarRepository().deleteById(id);
	}
	
	public DirecionarRepository getDirecionarRepository() {
		return this.direcionarRepository;
	}
}
