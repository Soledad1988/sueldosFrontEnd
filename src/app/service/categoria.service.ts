import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categorias';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  URL = 'http://localhost:8080/categoria';
  

  constructor(private httpClient: HttpClient) { }
  
  categoria():Observable<any>{
    return this.httpClient.get(this.URL);
  }

  crearCategoria(categoria: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.URL}`, categoria, { headers });
  }

  guardar(categoria: Categoria):Observable<any>
  {
    return this.httpClient.post(this.URL, categoria);
    
  }

  eliminar(idCategoria:number):Observable<any>
  {
    return this.httpClient.delete(this.URL+'/'+idCategoria);
  }

}
