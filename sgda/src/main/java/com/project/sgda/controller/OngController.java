package com.project.sgda.controller;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.engine.jdbc.spi.SqlExceptionHelper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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
import com.project.sgda.entity.Ong;
import com.project.sgda.service.OngService;

import jakarta.persistence.EntityNotFoundException;

@RestController
@RequestMapping("/Ongs")
public class OngController {

	@Autowired
	private OngService ongService;
	
	@PostMapping(value="/post")
	public ResponseEntity<String> post(@RequestBody Ong ong){
		try {
			getOngService().post(ong);
			return new ResponseEntity<>("A " + ong.getNome() + " Foi cadastrada com sucesso",HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>("Não foi Possivel Fazer o Cadastro",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value="/getAll")
	public ResponseEntity<List<Ong>> getAll(){
		List<Ong> ongs = new ArrayList<>();
		try {
			ongs = getOngService().getAll();
			return new ResponseEntity<>(ongs, HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping(value="/delete/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id){
		Ong ong = getOngService().getById(id);
		try {
			getOngService().delete(id);
			return new ResponseEntity<>("A "+ ong.getNome() +" Foi Removida Com sucesso",HttpStatus.OK);
		}catch(EntityNotFoundException e) {
			return new ResponseEntity<>("Não foi Possivel remover a " + ong.getNome(),HttpStatus.NOT_FOUND);
		}catch(DataIntegrityViolationException  e) {
			return new ResponseEntity<>("Essa Ong está com entregas Pendentes, Entregue todos os alimentos pendente antes de Remover a Ong", HttpStatus.CONFLICT);
		}
	}
	
	@PutMapping(value="/update/{id}")
	public ResponseEntity<String> update(@PathVariable("id") Long id, @RequestBody Ong ong){
		try {
			getOngService().update(id, ong);
			return new ResponseEntity<>("A "+ ong.getNome() +" Foi Atualizada Com sucesso",HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>("Não foi Possivel Remover a Ong " + ong.getNome(),HttpStatus.NOT_FOUND);
		}
		
	}
	
	public OngService getOngService() {
		return this.ongService;
	}
}
