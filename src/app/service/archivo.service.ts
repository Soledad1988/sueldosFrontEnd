import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Colaborador } from '../models/colaborador';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {

  constructor(private http: HttpClient) { }

  imprimirPdf(colaborador: Colaborador) {
    return this.http.get('http://localhost:8080/generar/pdf', { responseType: 'blob' });
  }

  generarExcel() {
    return this.http.get('http://localhost:8080/generar/excel', { responseType: 'blob' });
  }

  imprimirPdfNoedades(month: number, year: number): Observable<Blob> {
    const params = new HttpParams()
      .set('month', month.toString())
      .set('year', year.toString()); // Agregar el parámetro 'year'
  
    return this.http.get('http://localhost:8080/novedad/pdf', { params, responseType: 'blob' });
  }

  generarExcelNovedades(month: number, year: number): Observable<Blob> {
    const params = new HttpParams().set('month', month.toString()).set('year', year.toString());
    return this.http.get('http://localhost:8080/novedad/excel', { params, responseType: 'blob' });
  }
}
