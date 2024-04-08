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

  crearNovedad2(novedad: any, idColaborador: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.URL}/${idColaborador}`, novedad, { headers });
  }

  crearNovedad(novedad: Novedad): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.URL, novedad, { headers });
  }

   // Método para obtener novedades filtradas por período
   getNovedadesByPeriod2(periodo: Date): Observable<Novedad[]> {
    const formattedPeriodo = formatDate(periodo, 'yyyy-MM-dd', 'en-US');
    return this.httpClient.get<Novedad[]>(`${this.URL}/periodo/${formattedPeriodo}`);
   } 

   // Método para obtener novedades filtradas por un rango de fechas
  getNovedadesByPeriod(startDate: Date, endDate: Date): Observable<Novedad[]> {
    const formattedStartDate = formatDate(startDate, 'yyyy-MM-dd', 'en-US');
    const formattedEndDate = formatDate(endDate, 'yyyy-MM-dd', 'en-US');
    return this.httpClient.get<Novedad[]>(`${this.URL}/period?start=${formattedStartDate}&end=${formattedEndDate}`);
  }


   // Método para obtener novedades filtradas por mes
  getNovedadesByMonth(month: number): Observable<Novedad[]> {
    return this.httpClient.get<Novedad[]>(`${this.URL}/month/${month}`);
  } 

    // Método para obtener novedades filtradas por mes y año
    getNovedadesByMonthAndYear(month: number, year: number): Observable<Novedad[]> {
      return this.httpClient.get<Novedad[]>(`${this.URL}/month/${month}/year/${year}`);
    }

  
}
