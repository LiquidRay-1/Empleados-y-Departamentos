package com.example.empleados.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "departamentos")
public class Departamento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long departamento_id;
    private String nombreDepartamento;

    @JsonManagedReference
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "departamento")
    private List<Empleado> empleados = new ArrayList<>();

    public Departamento() {
    }

    public Departamento(Long departamento_id, String nombreDepartamento, List<Empleado> empleados) {
        this.departamento_id = departamento_id;
        this.nombreDepartamento = nombreDepartamento;
        this.empleados = empleados;
    }

    public Long getDepartamento_id() {
        return departamento_id;
    }

    public void setDepartamento_id(Long departamento_id) {
        this.departamento_id = departamento_id;
    }

    public String getNombreDepartamento() {
        return nombreDepartamento;
    }

    public void setNombreDepartamento(String nombreDepartamento) {
        this.nombreDepartamento = nombreDepartamento;
    }

    public List<Empleado> getEmpleados() {
        return empleados;
    }

    public void setEmpleados(List<Empleado> empleados) {
        this.empleados = empleados;
    }
}
