import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private BASE_URL:string = "http://localhost:8080/api/empleado"
  private httpHeader:HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  constructor(private http:HttpClient) { }

  guardarEmpleado(empleado:Empleado) : Observable<Empleado>{
    return this.http.post<Empleado>(this.BASE_URL, empleado, {headers: this.httpHeader})
  }
}
