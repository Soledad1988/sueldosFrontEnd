import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { NovedadService } from 'src/app/service/novedad.service';
import { FormControl } from '@angular/forms'; // Importa FormControl
import swal from 'sweetalert2';
import { Novedad } from 'src/app/models/novedad';

@Component({
  selector: 'app-nueva-novedad',
  templateUrl: './nueva-novedad.component.html',
  styleUrls: ['./nueva-novedad.component.css']
})
export class NuevaNovedadComponent implements OnInit{

  date = new FormControl(); // Define la propiedad date como un FormControl
  colaboradores: Colaborador[] = [];
  colaboradorActual: Colaborador | null = null;
  nuevaNovedad: any = {};
  
  constructor(
    private colaboradorService: ColaboradorService, 
    private novedadSevice: NovedadService) {}
  
  ngOnInit(): void {
    this.listarColaboradores();
  }
  

  listarColaboradores(): void {
    this.colaboradorService.colaborador().subscribe(
      (data: Colaborador[]) => {
        // Filtrar solo los colaboradores activos
        this.colaboradores = data.filter(colaborador => colaborador.activo).map(colaborador => ({
          ...colaborador,
          nuevaNovedad: {
            vacaciones: 0,
            feriado: 0,
            inasistenciaJustificada: 0,
            inasistenciaInjustificada: 0
          }
        }));
      },
      (error: any) => {
        console.error('Error al cargar los colaboradores:', error);
      }
    );
  }
  
  asignarNovedadAColaborador(colaborador: Colaborador): void {
    if (colaborador && colaborador.id && this.date.value) {
      const periodo = this.date.value;
      const nuevaNovedad: Novedad = {
        ...colaborador.nuevaNovedad,
        colaborador,
        periodo // Asignar la fecha
      };

      this.novedadSevice.crearNovedad(nuevaNovedad).subscribe(
        (response: any) => {
          console.log('Novedad creada y asignada correctamente:', response);
          // Mostrar mensaje de éxito
          swal.fire({
            icon: 'success',
            title: 'Novedad creada y asignada correctamente',
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error: any) => {
          console.error('Error al crear y asignar la novedad:', error);
          // Mostrar mensaje de error
          swal.fire({
            icon: 'error',
            title: 'Error al crear y asignar la novedad',
            text: 'Por favor, inténtelo de nuevo más tarde',
            confirmButtonText: 'Cerrar'
          });
        }
      );
    } else {
      console.error('Error: Datos incompletos para crear y asignar la novedad');
      // Mostrar mensaje de error
      swal.fire({
        icon: 'error',
        title: 'Error: Datos incompletos para crear y asignar la novedad',
        confirmButtonText: 'Cerrar'
      });
    }
  }

  asignarNovedadAColaborador2(colaborador: Colaborador): void {
    if (colaborador && colaborador.id) {
      
      this.novedadSevice.crearNovedad2(colaborador.nuevaNovedad, colaborador.id).subscribe(
        (response: any) => {
          console.log('Novedad creada y asignada correctamente:', response);
          // Mostrar mensaje de éxito
          swal.fire({
            icon: 'success',
            title: 'Novedad creada y asignada correctamente',
            showConfirmButton: false,
            timer: 1500
          });
        },
        (error: any) => {
          console.error('Error al crear y asignar la novedad:', error);
          // Mostrar mensaje de error
          swal.fire({
            icon: 'error',
            title: 'Error al crear y asignar la novedad',
            text: 'Por favor, inténtelo de nuevo más tarde',
            confirmButtonText: 'Cerrar'
          });
        }
      );
    } else {
      console.error('Error: Datos incompletos para crear y asignar la novedad');
      // Mostrar mensaje de error
      swal.fire({
        icon: 'error',
        title: 'Error: Datos incompletos para crear y asignar la novedad',
        confirmButtonText: 'Cerrar'
      });
    }
  }
  

}
