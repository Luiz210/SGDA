package com.project.sgda.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.sgda.entity.Alimento;
import com.project.sgda.service.AlimentoService;

@RestController
@RequestMapping("/Alimentos")
public class AlimentoController {

	@Autowired
	private AlimentoService alimentoService;
	
	@GetMapping(value="/getAll")
	public ResponseEntity<List<Alimento>> getAll(){
		List<Alimento> alimentos = new ArrayList<>();
		try {
			alimentos = getAlimentoService().getAll();
			return new ResponseEntity<>(alimentos, HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/getByIdAndAtivo/{id}/{status}")
	public ResponseEntity<Collection<Alimento>> getByIdStatus(@PathVariable("id") Long usuario_id, @PathVariable("status") boolean status){
		try {
			return new ResponseEntity<>(getAlimentoService().getByUsuarioAndStatus(usuario_id, status), HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/getByStatus/{status}")
	public ResponseEntity<List<Alimento>> getByStatus(@PathVariable("status") boolean status){
		try {
			return new ResponseEntity<>(getAlimentoService().getByStatus(status), HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping(value="/post")
	public ResponseEntity<String> post(@RequestBody  Alimento alimento){
		try {
			getAlimentoService().post(alimento);
			return new ResponseEntity<>("O " + alimento.getName() + " foi cadastrado com sucesso",HttpStatus.CREATED);
		}catch(Exception e){
			return new ResponseEntity<>("Não foi Possivel cadastrar o " + alimento.getName(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping(value="/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id){
		try {
			Alimento alimento = getAlimentoService().delete(id);
			return new ResponseEntity<>(alimento.getName() + " removido com sucesso", HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>("Não foi Possivel Remover o Alimento",HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping(value="/update/{id}")
	public ResponseEntity<String> update(@PathVariable("id") Long id, @RequestBody Alimento alimento){
		try {
			getAlimentoService().update(id, alimento);
			return new ResponseEntity<>(alimento.getName() + " foi Atualizado com sucesso",HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>("Não foi possivel atualizar " + alimento.getName(),HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public AlimentoService getAlimentoService() {
		return this.alimentoService;
	}
}
