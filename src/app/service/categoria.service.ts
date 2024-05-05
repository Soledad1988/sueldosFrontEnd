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

   // Método para obtener una categoria por su ID
   getCategoria(id:number):Observable<Categoria>{
    return this.httpClient.get<Categoria>(this.URL+"/"+id);
  }

  guardar(categoria: Categoria):Observable<any>{
    return this.httpClient.post(this.URL, categoria);
    
  }

  editar(id: number, categoria: Categoria): Observable<Categoria> {
    return this.httpClient.put<Categoria>(`${this.URL}/${id}`, categoria);
  }

  UnaCategoria(idCategoria:number):Observable<Categoria>{
    return this.httpClient.get<Categoria>(`${this.URL}/${idCategoria}`);
  }

  eliminar(idCategoria:number):Observable<any>{
    return this.httpClient.delete(this.URL+'/'+idCategoria);
  }
  
  getCategoriasPorConvenio(idConvenio: number): Observable<any> {
    return this.httpClient.get(`${this.URL}/porConvenio/${idConvenio}`);
  }

   // Método para obtener detalles completos de una categoría
   getCategoriaDetalles(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${this.URL}/${id}/detalles`);
  }

}
