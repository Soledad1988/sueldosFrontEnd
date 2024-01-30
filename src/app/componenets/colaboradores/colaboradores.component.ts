import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { ConvenioService } from 'src/app/service/convenio.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit{

  lista:any=[];
 
  constructor(private colaboradorService: ColaboradorService){}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void
  {
    this.colaboradorService.colaborador().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(id:number){
    this.colaboradorService.eliminar(id).subscribe(
      res=>{this.ngOnInit()
        ;},
      err=>console.log(err)
    );
  }

  
}
