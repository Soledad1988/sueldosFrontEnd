import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, pipe, tap } from 'rxjs';
import { Colaborador } from '../models/colaborador';
import { Novedad } from '../models/novedad';

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

  // Método para obtener todos los colaboradores
  colaborador():Observable<any>{
    return this.httpClient.get(this.URL);
  }

  // Método para crear un colaborador
  guardar(colaborador: Colaborador):Observable<any>
  {
    return this.httpClient.post(this.URL, colaborador)
  }

  crearColaborador(categoria: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.URL}`, categoria, { headers });
  }

 // Método para obtener un colaborador por su ID
  UnColaborador(id:number):Observable<Colaborador>{
    return this.httpClient.get<Colaborador>(this.URL+"/"+id);
  }

  // Método para editar un colaborador
  editar(id:number, colaborador: Colaborador):Observable<Colaborador>
  {
    return this.httpClient.put<Colaborador>(this.URL+'/'+id, colaborador);
  }

    // Método para eliminar un colaborador
  eliminar(id:number):Observable<any>
  {
    return this.httpClient.delete(this.URL+'/'+id);
  }

  // Método para cambiar el estado activo de un colaborador
  cambiarEstadoActivoColaborador(id: number, nuevoEstado: boolean): Observable<any> {
    return this.httpClient.put(`${this.URL}/cambiarEstado/${id}`, nuevoEstado);
  }

  asignarNovedadAColaborador(id: number, novedad: Novedad): Observable<any> {
    const url = `${this.URL}/${id}/novedad`;
    return this.httpClient.post(url, novedad);
  }

   // Método para obtener colaboradores filtrados por estado
   getColaboradoresPorEstado(activo: boolean): Observable<Colaborador[]> {
    return this.httpClient.get<Colaborador[]>(`${this.URL}/estado/${activo}`);
  }
} 
