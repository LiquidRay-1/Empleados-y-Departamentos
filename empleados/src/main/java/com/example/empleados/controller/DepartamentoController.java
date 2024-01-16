package com.example.empleados.controller;

import com.example.empleados.model.Departamento;
import com.example.empleados.service.DepartamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/departamento")
public class DepartamentoController {

    @Autowired
    private DepartamentoService departamentoService;

    @PostMapping
    public Departamento save(@RequestBody Departamento departamento){
        return departamentoService.guardarDepartamento(departamento);
    }
}
