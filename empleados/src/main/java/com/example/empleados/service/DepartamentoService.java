package com.example.empleados.service;

import com.example.empleados.model.Departamento;
import com.example.empleados.repository.DepartamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DepartamentoService {

    @Autowired
    private DepartamentoRepository departamentoRepository;

    public Departamento guardarDepartamento(Departamento departamento) {
        return departamentoRepository.save(departamento);
    }
}
