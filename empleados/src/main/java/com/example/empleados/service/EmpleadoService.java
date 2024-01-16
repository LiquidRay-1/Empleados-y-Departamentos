package com.example.empleados.service;

import com.example.empleados.converter.EmpleadoConverter;
import com.example.empleados.dto.ListaEmpleadoDTO;
import com.example.empleados.model.Empleado;
import com.example.empleados.repository.EmpleadoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmpleadoService {

    @Autowired
    private EmpleadoRepository empleadoRepository;

    @Autowired
    private EmpleadoConverter empleadoConverter;

    public Empleado guardarEmpleado(Empleado empleado){
        return empleadoRepository.save(empleado);
    }

    public List<Empleado> listaEmpleados(){
        return empleadoRepository.findAll();
    }

    public List<ListaEmpleadoDTO> listaEmpleadoDTO(){
        List<Empleado> listaEmpleados = empleadoRepository.findAll();
        List<ListaEmpleadoDTO> listaDTO = new ArrayList<>();
        listaEmpleados.forEach(empleado -> {
            listaDTO.add(empleadoConverter.convertEntityToDTO(empleado));
        });

        return listaDTO;
    }

}
