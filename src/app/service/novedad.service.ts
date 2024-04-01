import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Novedad } from '../models/novedad';

@Injectable({
  providedIn: 'root'
})
export class NovedadService {

  URL = 'http://localhost:8080/novedad';
  
  constructor(private httpClient: HttpClient) { }
  
  novedad():Observable<any>{
    return this.httpClient.get(this.URL);
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
  

}
