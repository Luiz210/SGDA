package com.project.sgda.dto;

import java.sql.Date;

import com.project.sgda.entity.Alimento;
import com.project.sgda.entity.Usuario;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

import org.modelmapper.ModelMapper;


public class AlimentoDTO {
	@NotBlank (message = "o nome do Alimento é obrigatorio")
	private String name;
	
	@Positive (message = "a Quantidade do Alimento tem que ser positiva")
	private int quantity;
	
	@Positive (message = "o preço do Alimento tem que ser positivo")
	private float price;
	
	private Date dataCadastro;
	
	@Future
	private Date dataValidade;
	
	private boolean status;
	
	private Usuario usuario;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Date getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public Date getDataValidade() {
		return dataValidade;
	}

	public void setDataValidade(Date dataValidade) {
		this.dataValidade = dataValidade;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
	static ModelMapper getModelMapper() {
        return new ModelMapper();
    }
	
	public static AlimentoDTO convertToDTO(Alimento alimento) {
		return getModelMapper().map(alimento, AlimentoDTO.class);
	}
}
