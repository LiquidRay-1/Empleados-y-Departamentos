import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { listaDepartamento } from 'src/app/model/ListaDepartamento';
import { Empleado } from 'src/app/model/empleado';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-guardar-empleado',
  templateUrl: './guardar-empleado.component.html',
  styleUrls: ['./guardar-empleado.component.css']
})
export class GuardarEmpleadoComponent {

  form:FormGroup
  //departamentos:any[] = []
  departamentos:listaDepartamento[] = []
  empleado:Empleado = {
    nombre:'',
    apellidoUno:'',
    apellidoDos:'',
    departamento : {
      id: 0
    }
  }

  constructor(private empleadoService: EmpleadoService, private departamntoService: DepartamentoService, private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      departamento: [], nombre: [''], apellidoUno: [''], apellidoDos: ['']
    })
  }

  ngOnInit(){
    this.findDepartments()
  }

  findDepartments(){
    this.departamntoService.listaDepartamentos().subscribe({
      next : res => {
        console.log(res),
        this.departamentos = res
      },
      error : err => console.log(err)
    })
  }

  getData(){
    this.empleado.nombre = this.form.get('nombre')?.value
    this.empleado.apellidoUno = this.form.get('apellidoUno')?.value
    this.empleado.apellidoDos = this.form.get('apellidoDos')?.value
    this.empleado.departamento.id = Number.parseInt(this.form.get('departamento')?.value)
    this.empleadoService.guardarEmpleado(this.empleado).subscribe({
      next : res => console.log(res),
      error : err => console.log(err)
    })
  }
}
