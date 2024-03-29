import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Liquidacion } from '../models/liquidacion';

@Injectable({
  providedIn: 'root'
})
export class LiquidacionService {

  private baseUrl = 'http://localhost:8080'; // Cambia la URL base por la de tu backend

  constructor(private http: HttpClient) { }

  obtenerLiquidaciones(): Observable<Liquidacion[]> {
    return this.http.get<Liquidacion[]>(`${this.baseUrl}/liquidacion`);
  }

}
