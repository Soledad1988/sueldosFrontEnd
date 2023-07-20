import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Colaborador } from '../models/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  URL = 'http://localhost:8080/colaborador';

  constructor(private httpClient: HttpClient) { }

  colaborador():Observable<any>{
    return this.httpClient.get(this.URL);
  }

  guardar(colaborador: Colaborador):Observable<any>
  {
    return this.httpClient.post(this.URL, colaborador);
  
  }

  //Obtener un huesped
  getUnHuesped(id:number):Observable<Colaborador>{
    return this.httpClient.get<Colaborador>(this.URL+"/"+id);
  }

  editarHuesped(id:number, colaborador: Colaborador):Observable<Colaborador>
  {
    return this.httpClient.put<Colaborador>(this.URL+'/'+id, colaborador);
  }

  deleteHuesped(id:number):Observable<any>
  {
    return this.httpClient.delete(this.URL+'/'+id);
  }
}
