import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, pipe, tap } from 'rxjs';
import { Colaborador } from '../models/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  URL = 'http://localhost:8080/colaborador';

  private _refersh$ = new Subject<void>();

  constructor(private httpClient: HttpClient) { }

  get refresh$(){
    return this._refersh$;
  }

  colaborador():Observable<any>{
    return this.httpClient.get(this.URL);
  }

  guardar(colaborador: Colaborador):Observable<any>
  {
    return this.httpClient.post(this.URL, colaborador)
  }

  crearColaborador(categoria: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.URL}`, categoria, { headers });
  }

  //Obtener un huesped
  UnColaborador(id:number):Observable<Colaborador>{
    return this.httpClient.get<Colaborador>(this.URL+"/"+id);
  }

  editar(id:number, colaborador: Colaborador):Observable<Colaborador>
  {
    return this.httpClient.put<Colaborador>(this.URL+'/'+id, colaborador);
  }

  eliminar(id:number):Observable<any>
  {
    return this.httpClient.delete(this.URL+'/'+id);
  }

  cambiarEstadoActivoColaborador(id: number, nuevoEstado: boolean): Observable<any> {
    return this.httpClient.put(`${this.URL}/cambiarEstado/${id}`, nuevoEstado);
  }
} 
