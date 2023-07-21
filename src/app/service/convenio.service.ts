import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Convenio } from '../models/Convenio';

@Injectable({
  providedIn: 'root'
})
export class ConvenioService {

  URL = 'http://localhost:8080/convenio';

  constructor(private httpClient: HttpClient) { }

  convenio():Observable<any>{
    return this.httpClient.get(this.URL);
  }

  guardar(convenio: Convenio):Observable<any>
  {
    return this.httpClient.post(this.URL, convenio);
    
  }

  //Obtener un huesped
  UnConvenio(idConvenio:number):Observable<Convenio>{
    return this.httpClient.get<Convenio>(this.URL+"/"+idConvenio);
  }

  editar(idConvenio:number, convenio: Convenio):Observable<Convenio>
  {
    return this.httpClient.put<Convenio>(this.URL+'/'+idConvenio, convenio);
  }

  eliminar(idConvenio:number):Observable<any>
  {
    return this.httpClient.delete(this.URL+'/'+idConvenio);
  }
}
