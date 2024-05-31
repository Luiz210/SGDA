package com.project.sgda.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="DOACAO")
public class Doacao {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="DATA_CADASTRO", nullable = false)
	private Date date;
	
	@Column(name="QUANTIA", nullable = false)
	private Float quantia;
	
	@Column(name="FORMA_PAGAMENTO", nullable = false)
	private String formaPagamento;
	
	@ManyToOne
	@JoinColumn(name="USUARIO_ID", referencedColumnName = "ID", nullable = false)
	private Usuario usuario;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Float getQuantia() {
		return quantia;
	}

	public void setQuantia(Float quantia) {
		this.quantia = quantia;
	}

	public String getFormaPagamento() {
		return formaPagamento;
	}

	public void setFormaPagamento(String formaPagamento) {
		this.formaPagamento = formaPagamento;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

}
