import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listaDepartamento } from '../model/ListaDepartamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private BASE_URL:string = "http://localhost:8080/api/departamento"

  constructor(private http:HttpClient) { }

  listaDepartamentos(): Observable<listaDepartamento[]> {
    return this.http.get<listaDepartamento[]>(this.BASE_URL)
  }
}
