import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuardarDepartamentoComponent } from './components/guardar-departamento/guardar-departamento.component';
import { GuardarEmpleadoComponent } from './components/guardar-empleado/guardar-empleado.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GuardarDepartamentoComponent,
    GuardarEmpleadoComponent,
    ListaEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
