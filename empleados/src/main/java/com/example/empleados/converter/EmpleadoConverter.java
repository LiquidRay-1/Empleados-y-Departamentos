package com.example.empleados.converter;

import com.example.empleados.dto.ListaEmpleadoDTO;
import com.example.empleados.model.Empleado;
import org.springframework.stereotype.Component;

@Component
public class EmpleadoConverter {

    public ListaEmpleadoDTO convertEntityToDTO(Empleado empleado){
        ListaEmpleadoDTO listaEmpleadoDTO = new ListaEmpleadoDTO();

        listaEmpleadoDTO.setNombreEmpleado(empleado.getNombre());
        listaEmpleadoDTO.setApellidos(empleado.getApellidoUno() + " " + empleado.getApellidoDos());
        listaEmpleadoDTO.setDepartamentoEmpleado(empleado.getDepartamento().getNombreDepartamento());

        return listaEmpleadoDTO;
    }
}
