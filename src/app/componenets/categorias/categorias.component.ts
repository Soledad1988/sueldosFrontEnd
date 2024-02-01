import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ConvenioService } from 'src/app/service/convenio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{

  title='Categoria Registrada';
  
  lista:any=[];

  convenios: any[] = [];

  constructor(private categoriasService:CategoriaService,
    private categoriaService:CategoriaService, 
    private convenioService:ConvenioService,
    private router:Router, ){}
  
  nuevaCategoria = {
    id_categoria:'',
    nombre:'',
    monto:'',
    descripcion:'',
    convenio:{
      idConvenio:''
    }
  }

  ngOnInit(): void {
    this.listar();

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

  listar(): void
  {
    this.categoriasService.categoria().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:number){
    this.categoriasService.eliminar(id).subscribe(
      res=>{this.ngOnInit()
        ;},
      err=>console.log(err)
    );
  }

  agregarCategoria(){
    console.log(this.nuevaCategoria);

    this.categoriaService.crearCategoria(this.nuevaCategoria).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Categoria guardada','La categoria ha sido guardado con éxito','success');
        this.nuevaCategoria = {
            id_categoria:'',
            nombre:'',
            monto:'',
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

  
}
