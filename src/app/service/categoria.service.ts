import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  URL = 'http://localhost:8080/categoria';
  

  constructor(private httpClient: HttpClient) { }
  
  categoria():Observable<any>{
    return this.httpClient.get(this.URL);
  }

  eliminar(idCategoria:number):Observable<any>
  {
    return this.httpClient.delete(this.URL+'/'+idCategoria);
  }
}
