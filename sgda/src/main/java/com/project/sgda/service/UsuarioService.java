package com.project.sgda.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.project.sgda.entity.Usuario;
import com.project.sgda.repository.UsuarioRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class UsuarioService {

	@Autowired(required = false)
	private UsuarioRepository usuarioRepository;
	
	public void post(Usuario usuario) {
		getUsuarioRepository().save(usuario);
	}
	
	public Usuario login(String usuario, String cnpj, String senha) {
		return getUsuarioRepository().getByUsuarioAndCnpjAndSenha(usuario, cnpj, senha);
	}
	
	public void incrementarSaldo(Long usuario_id, Float saldo) {
		Usuario usuario = getUsuarioRepository().findById(usuario_id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
		Float saldoAtual = usuario.getSaldo();
		saldoAtual += saldo;
		usuario.setSaldo(saldoAtual);
		getUsuarioRepository().save(usuario);
	}
	
	public void decrementarSaldo(Long usuario_id, Float saldo) {
		Usuario usuario = getUsuarioRepository().findById(usuario_id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
		Float saldoAtual = usuario.getSaldo();
		saldoAtual -= saldo;
		usuario.setSaldo(saldoAtual);
		getUsuarioRepository().save(usuario);
	}
	
	public Usuario getById(Long id) {
		return getUsuarioRepository().findById(id).orElseThrow(() -> new EntityNotFoundException("recurso não encontrado"));
	}
	
	public UsuarioRepository getUsuarioRepository() {
		return this.usuarioRepository;
	}
}