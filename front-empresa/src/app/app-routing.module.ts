import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardarEmpleadoComponent } from './components/guardar-empleado/guardar-empleado.component';
import { GuardarDepartamentoComponent } from './components/guardar-departamento/guardar-departamento.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';

const routes: Routes = [
  {path: 'guardar-empleado', component: GuardarEmpleadoComponent},
  {path: 'guardar-departamento', component: GuardarDepartamentoComponent},
  {path: 'lista-empleado', component: ListaEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
