package com.project.sgda.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.sgda.entity.Alimento;
import com.project.sgda.entity.Direcionar;
import com.project.sgda.service.AlimentoService;
import com.project.sgda.service.DirecionarService;
import com.project.sgda.service.UsuarioService;

@RestController
@RequestMapping("/Direcionar")
public class DirecionarController {

	@Autowired
	private DirecionarService direcionarService;
	
	@Autowired
	private AlimentoService alimentoService;
	
	@Autowired
	private UsuarioService usuarioService;

	@PostMapping(value="/post/{id}")
	public ResponseEntity<String> post(@PathVariable("id") Long id, @RequestBody Direcionar direcionar){
		try {
			getDirecionarService().post(direcionar);
			Alimento alimento = direcionar.getAlimento();
			Alimento aalimento = getAlimentoService().getById(direcionar.getAlimento().getId());
			getAlimentoService().updateStatus(alimento.getId(), false);
			Float valor = aalimento.getPrice() * aalimento.getQuantity();
			getUsuarioService().decrementarSaldo(id, valor);
			return new ResponseEntity<>("O Alimento Foi direcionado Com sucesso, Entregue no dia " + direcionar.getData_entrega(),HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>("Não foi Possivel Direcionar" ,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/getAll")
	public ResponseEntity<List<Direcionar>> getAll(){
		try {
			List<Direcionar> direcionars = getDirecionarService().getAll();
			return new ResponseEntity<>(direcionars, HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping(value="/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id){
		try {
			getDirecionarService().delete(id);
			return new ResponseEntity<>("Alimento Marcado como Entregue", HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>("Não foi Marcar esse Alimento como Entregue", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public DirecionarService getDirecionarService() {
		return this.direcionarService;
	}
	
	public AlimentoService getAlimentoService() {
		return this.alimentoService;
	}
	
	public UsuarioService getUsuarioService() {
		return this.usuarioService;
	}
}
