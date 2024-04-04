import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';
import { Novedad } from 'src/app/models/novedad';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { FormControl } from '@angular/forms'; // Importa FormControl
import { NovedadService } from 'src/app/service/novedad.service';

@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  date = new FormControl();
  periodos: string[] = ['Enero 2024', 'Febrero 2024', 'Marzo 2024', 'Abril 2024'];
  novedades: Novedad[] = [];
  selectedPeriod: Date | null = null; // Variable para almacenar el período seleccionado

  constructor(private novedadService: NovedadService) { }

  ngOnInit(): void {
    this.obtenerNovedades();
  }

  obtenerNovedades(): void {
    this.novedadService.getNovedades().subscribe(
      (data: Novedad[]) => {
        this.novedades = data;
      },
      (error) => {
        console.error('Error al obtener las novedades:', error);
      }
    );
  }

  filtrarNovedades(): void {
    if (this.selectedPeriod !== null) {
      this.novedadService.getNovedadesByPeriod(this.selectedPeriod).subscribe(
        (data: Novedad[]) => {
          this.novedades = data;
        },
        (error: any) => {
          console.error('Error al filtrar las novedades por período:', error);
        }
      );
    } else {
      this.obtenerNovedades();
    }
  }
}
