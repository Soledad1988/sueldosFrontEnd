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

  colaboradores: Colaborador[] = [];
  colaboradorActual: Colaborador | null = null;
  indiceActual = 0;

  constructor(private colaboradorService: ColaboradorService) {}

  ngOnInit(): void {
    this.listarColaboradores();
  }

  listarColaboradores(): void {
    this.colaboradorService.colaborador().subscribe(
      (data: Colaborador[]) => {
        this.colaboradores = data;
        if (this.colaboradores.length > 0) {
          this.colaboradorActual = this.colaboradores[0];
        }
      },
      (error: any) => {
        console.error('Error al cargar los colaboradores:', error);
      }
    );
  }

  irColaboradorAnterior(): void {
    if (this.indiceActual > 0) {
      this.indiceActual--;
      this.colaboradorActual = this.colaboradores[this.indiceActual];
    } else {
      // Si estamos en el primer colaborador, vamos al último
      this.indiceActual = this.colaboradores.length - 1;
      this.colaboradorActual = this.colaboradores[this.indiceActual];
    }
  }

  irColaboradorSiguiente(): void {
    if (this.indiceActual < this.colaboradores.length - 1) {
      this.indiceActual++;
      this.colaboradorActual = this.colaboradores[this.indiceActual];
    } else {
      // Si estamos en el último colaborador, vamos al primero
      this.indiceActual = 0;
      this.colaboradorActual = this.colaboradores[this.indiceActual];
    }
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

  
  /*lista:any=[];
 
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
  }*/
  
}
