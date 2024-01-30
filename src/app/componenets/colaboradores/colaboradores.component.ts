import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/models/colaborador';
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

  toggleEstadoColaborador(colaborador: Colaborador) {
    if (colaborador.id !== undefined) {
      const nuevoEstado = !colaborador.activo;
      this.colaboradorService.cambiarEstadoActivoColaborador(colaborador.id, nuevoEstado)
        .subscribe({
          next: (response) => {
            // Actualiza la lista o el estado del colaborador en la vista
            colaborador.activo = nuevoEstado;
            // Opcionalmente, mostrar un mensaje de éxito/error
          },
          error: (error) => {
            // Manejar el error
          }
        });
    } else {
      // Manejar el caso en que el id es undefined
      // Por ejemplo, mostrar un mensaje de error
    }
  }
  
}
