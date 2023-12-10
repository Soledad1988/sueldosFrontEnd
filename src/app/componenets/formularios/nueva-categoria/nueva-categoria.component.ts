import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import { Categoria } from 'src/app/models/categorias';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { ConvenioService } from 'src/app/service/convenio.service';

@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit{

  title='Categoria Registrada';
  

  constructor(private categoriaService:CategoriaService, 
    private convenioService:ConvenioService,
    private router:Router, 
    private activatedRoute:ActivatedRoute,
    private http: HttpClient){}

    convenios: any[] = [];

    //nuevaCategoria: Categoria = new Categoria();

    nuevaCategoria = {
      id_categoria:'',
      nombre:'',
      descripcion:'',
      convenio:{
        idConvenio:''
      }
    }

  ngOnInit(): void {

    this.convenioService.convenio().subscribe(
      (dato:any) => {
        this.convenios = dato;
        console.log(this.convenios);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )

  }

  agregarCategoria(){
    console.log(this.nuevaCategoria);

    this.categoriaService.crearCategoria(this.nuevaCategoria).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Examen guardado','El examen ha sido guardado con éxito','success');
        this.nuevaCategoria = {
            id_categoria:'',
            nombre:'',
            descripcion:'',
            convenio:{
              idConvenio:''
            }
        }
        this.router.navigate(['/categoria']);
      },
      (error) => {
        Swal.fire('Error','Error al guardar el examen','error');
      }
    )
  }


/*
  agregarCategoria(){
    this.categoriaService.guardar(this.nuevaCategoria).subscribe(
      res=>{
        console.log(res);
        Swal.fire(this.title,`Categoria creada con exito`, 'success')
        this.router.navigate(['/categoria']);
      },
      err => {
        console.error('Error al guardar la categoría', err);
        // Puedes manejar el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario.
      }
    );
  }*/


}
