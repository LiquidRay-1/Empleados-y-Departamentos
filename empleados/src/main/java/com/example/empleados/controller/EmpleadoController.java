package com.example.empleados.controller;

import com.example.empleados.dto.ListaEmpleadoDTO;
import com.example.empleados.model.Empleado;
import com.example.empleados.service.EmpleadoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/empleado")
public class EmpleadoController {

    @Autowired
    private EmpleadoService empleadoService;

    @PostMapping
    public Empleado save(@RequestBody Empleado empleado){
        return empleadoService.guardarEmpleado(empleado);
    }

    @GetMapping
    public List<Empleado> list(){
        return empleadoService.listaEmpleados();
    }

    @GetMapping("/lista-dto")
    public List<ListaEmpleadoDTO> listaDTO(){
        return empleadoService.listaEmpleadoDTO();
    }

}
