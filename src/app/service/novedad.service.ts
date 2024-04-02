import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novedad } from '../models/novedad';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {

  URL = 'http://localhost:8080/novedad';
  
  constructor(private httpClient: HttpClient) { }
  
  novedad():Observable<any>{
    return this.httpClient.get(this.URL);
  }

  getNovedades(): Observable<Novedad[]> {
    return this.httpClient.get<Novedad[]>(this.URL);
  }

  crear(novedad: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.URL}`, novedad, { headers });
  }

  guardar(novedad: Novedad):Observable<any>
  {
    return this.httpClient.post(this.URL, novedad);
    
  }

  eliminar(idNovedad:number):Observable<any>
  {
    return this.httpClient.delete(this.URL+'/'+idNovedad);
  }

  crearNovedad(novedad: any, idColaborador: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.URL}/${idColaborador}`, novedad, { headers });
  }

   // Método para obtener novedades filtradas por período
  getNovedadesByPeriod(periodo: Date): Observable<Novedad[]> {
    // Formatea la fecha al formato esperado por el backend (YYYY-MM-DD)
    const formattedPeriodo = formatDate(periodo, 'yyyy-MM-dd', 'en-US');

    // Para enviar el período como parámetro en la URL, puedes utilizar HttpParams
    const params = new HttpParams().set('periodo', formattedPeriodo);
    return this.httpClient.get<Novedad[]>(`${this.URL}/periodo`, { params });
  }

  
}
