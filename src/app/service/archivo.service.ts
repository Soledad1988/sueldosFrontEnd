import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colaborador } from '../models/colaborador';

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

  imprimirPdfNoedades(colaborador: Colaborador) {
    return this.http.get('http://localhost:8080/novedad/pdf', { responseType: 'blob' });
  }

  generarExcelNovedades() {
    return this.http.get('http://localhost:8080/novedad/excel', { responseType: 'blob' });
  }
}
