package com.project.sgda.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.sgda.entity.Doacao;
import com.project.sgda.entity.Usuario;
import com.project.sgda.service.DoacaoService;
import com.project.sgda.service.UsuarioService;

@RestController
@RequestMapping("/Doacoes")
public class DoacaoController {

	@Autowired
	private DoacaoService doacaoService;
	
	@Autowired 
	private UsuarioService usuarioService;
	
	@PostMapping(value="/post/{idReceptor}")
	public ResponseEntity<String> post(@RequestBody Doacao doacao, @PathVariable("idReceptor") Long idReceptor){
	    try {
	        Usuario usuarioReceptor = getUsuarioService().getById(idReceptor);
	        getUsuarioService().incrementarSaldo(usuarioReceptor.getId() ,doacao.getQuantia());
	        getDoacaoService().post(doacao);

	        return new ResponseEntity<>("Muito Obrigado pela Doação no Valor de $" + doacao.getQuantia(),HttpStatus.OK);
	    }catch(Exception e) {
	        return new ResponseEntity<>("Não foi possivel Efetuar a Doação, Tente Novamente",HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

	@GetMapping(value="/getById/{id}")
	public ResponseEntity<List<Doacao>> getDoacaoById(@PathVariable("id") Long id){
		List<Doacao> doacoes = new ArrayList<>();
		try {
			doacoes = getDoacaoService().getAllById(id);
			return new ResponseEntity<>(doacoes, HttpStatus.OK);
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping(value="/getAll")
	public ResponseEntity<List<Doacao>> getAll(){
		List<Doacao> doacoes = new ArrayList<>();
		try {
			doacoes = getDoacaoService().getAll();
			return new ResponseEntity<>(doacoes, HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public DoacaoService getDoacaoService() {
		return this.doacaoService;
	}
	
	public UsuarioService getUsuarioService() {
		return this.usuarioService;
	}
}
