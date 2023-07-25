import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{

  lista:any=[];

  constructor(private categoriasService:CategoriaService){}
  
  ngOnInit(): void {
    this.listar();
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
  
}
