import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObraSocial } from '../models/ObraSocial';

@Injectable({
  providedIn: 'root'
})
export class ObrasocialService {

  URL = 'http://localhost:8080/obraSocial';

  constructor(private httpClient: HttpClient) { }

  obraSocial():Observable<any>{
    return this.httpClient.get(this.URL);
  }

  guardar(obraSocial: ObraSocial):Observable<any>
  {
    return this.httpClient.post(this.URL, obraSocial);
    
  }

  UnObraSocial(idObrasocial:number):Observable<ObraSocial>{
    return this.httpClient.get<ObraSocial>(this.URL+"/"+idObrasocial);
  }

  editar(idObrasocial:number, obraSocial: ObraSocial):Observable<ObraSocial>
  {
    return this.httpClient.put<ObraSocial>(this.URL+'/'+idObrasocial, obraSocial);
  }

  eliminar(idObrasocial:number):Observable<any>
  {
    return this.httpClient.delete(this.URL+'/'+idObrasocial);
  }
}
