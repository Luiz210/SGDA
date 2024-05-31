package com.project.sgda.utils;

import org.springframework.stereotype.Component;

import com.project.sgda.dto.AlimentoDTO;
import com.project.sgda.entity.Alimento;

@Component
public class AlimentoMapper {
	
	public Alimento convertToEntity(AlimentoDTO dto) {
		Alimento alimento = new Alimento();
		alimento.setName(dto.getName());
		alimento.setPrice(dto.getPrice());
		alimento.setQuantity(dto.getQuantity());
		alimento.setDataCadastro(dto.getDataCadastro());
		alimento.setDataValidade(dto.getDataValidade());
		alimento.setStatus(dto.isStatus());
		alimento.setUsuario(dto.getUsuario());
		
		return alimento;
	}
}
