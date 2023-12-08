import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/models/categorias';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit{

  title='Categoria Registrada';

  nuevaCategoria: Categoria = new Categoria();

  constructor(private categoriaService:CategoriaService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private http: HttpClient){}

    con: any[] = [];

  ngOnInit(): void {

    this.http.get<any[]>('http://localhost:8080/convenio').subscribe((data) => {
      this.con = data;
    });
  
  }


  agregarCategoria(){
    this.categoriaService.guardar(this.nuevaCategoria).subscribe(
      res=>{
        console.log(res);
        Swal.fire(this.title,`Categoria creada con exito`, 'success')
        this.router.navigate(['/categoria']);
      },
      err=>console.log(err)
    );
  }

}
