import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';
import { Novedad } from 'src/app/models/novedad';
import { ColaboradorService } from 'src/app/service/colaborador.service';

@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})
export class LiquidacionComponent implements OnInit{

  colaboradores: Colaborador[] = [];
  colaboradorActual: Colaborador | null = null;
  nuevaNovedad: any = {}; // Define la estructura de la nueva novedad

  constructor(
    private colaboradorService: ColaboradorService) {}
  
  ngOnInit(): void {
    this.listarColaboradores();
  }

 /* listarColaboradores(): void {
    this.colaboradorService.colaborador().subscribe(
      (data: Colaborador[]) => {
        this.colaboradores = data;
        // Asegúrate de que cada colaborador tenga un objeto Novedad inicializado
        this.colaboradores.forEach(colaborador => {
          if (!colaborador.novedades) {
            colaborador.novedades = {};
          }
        });
      },
      (error: any) => {
        console.error('Error al cargar los colaboradores:', error);
      }
    );
  }*/

  listarColaboradores(): void {
    this.colaboradorService.colaborador().subscribe(
      (data: Colaborador[]) => {
        this.colaboradores = data;
        // Asegúrate de que cada colaborador tenga un array de novedades inicializado
        this.colaboradores.forEach(colaborador => {
          if (!colaborador.novedades) {
            colaborador.novedades = []; // Inicializa novedades como un array vacío
          }
        });
      },
      (error: any) => {
        console.error('Error al cargar los colaboradores:', error);
      }
    );
  }

  asignarNovedadAColaborador(colaborador: Colaborador): void {
    if (colaborador.id !== undefined) { // Verifica si colaborador.id tiene un valor definido
      this.colaboradorService.asignarNovedadAColaborador(colaborador.id, this.nuevaNovedad).subscribe(
        (response: any) => {
          console.log('Novedad asignada correctamente:', response);
          // Puedes mostrar un mensaje de éxito al usuario si lo deseas
        },
        (error: any) => {
          console.error('Error al asignar la novedad:', error);
          // Puedes mostrar un mensaje de error al usuario si lo deseas
        }
      );
    } else {
      console.error('Error: El ID del colaborador es undefined');
      // Puedes mostrar un mensaje de error al usuario si lo deseas
    }
  }
  
  

}
