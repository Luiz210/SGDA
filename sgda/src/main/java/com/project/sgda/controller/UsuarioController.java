package com.project.sgda.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.project.sgda.entity.Usuario;
import com.project.sgda.service.UsuarioService;

@RestController
@RequestMapping("/Usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping(value="/post")
	public ResponseEntity<String> post(@RequestBody Usuario usuario){
		try {
			getUsuarioService().post(usuario);
			return new ResponseEntity<>("Usuario Cadastrado Com sucesso, Você Já Pode Fazer Login",HttpStatus.OK);
		}catch(Exception e){
			return new ResponseEntity<>("Não foi Possivel Cadastrar esse Usuario",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping(value="/login")
	public ResponseEntity<Usuario> login(@RequestBody Usuario usuario){
		try {
		Usuario uusuario = getUsuarioService().login(usuario.getUsuario(), usuario.getCnpj(), usuario.getSenha());
		if(uusuario != null) {
			return new ResponseEntity<>(uusuario, HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		}catch(Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public UsuarioService getUsuarioService() {
		return usuarioService;
	}
	
}