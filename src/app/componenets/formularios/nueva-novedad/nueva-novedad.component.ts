import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { NovedadService } from 'src/app/service/novedad.service';

@Component({
  selector: 'app-nueva-novedad',
  templateUrl: './nueva-novedad.component.html',
  styleUrls: ['./nueva-novedad.component.css']
})
export class NuevaNovedadComponent implements OnInit{

  colaboradores: Colaborador[] = [];
  colaboradorActual: Colaborador | null = null;
  nuevaNovedad: any = {};
  showPeriodSelector: boolean = false;
  selectedPeriod: string = ""; // Variable para almacenar el período seleccionado
  periodos: string[] = ["enero 2024", "febrero 2024", "marzo 2024", "abril 2024"]; // Lista de períodos


  constructor(
    private colaboradorService: ColaboradorService, 
    private novedadSevice: NovedadService) {}
  
  ngOnInit(): void {
    this.listarColaboradores();
  }

  // Función para mostrar u ocultar la lista desplegable del período
  togglePeriodSelector() {
    this.showPeriodSelector = !this.showPeriodSelector;
  }
  /*
  listarColaboradores(): void {
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
        this.colaboradores = data.map(colaborador => ({
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
    if (colaborador && colaborador.id) {
      this.novedadSevice.crearNovedad(colaborador.nuevaNovedad, colaborador.id).subscribe(
        (response: any) => {
          console.log('Novedad creada y asignada correctamente:', response);
          // Puedes mostrar un mensaje de éxito al usuario si lo deseas
        },
        (error: any) => {
          console.error('Error al crear y asignar la novedad:', error);
          // Puedes mostrar un mensaje de error al usuario si lo deseas
        }
      );
    } else {
      console.error('Error: Datos incompletos para crear y asignar la novedad');
      // Puedes mostrar un mensaje de error al usuario si lo deseas
    }
  }
  

}
