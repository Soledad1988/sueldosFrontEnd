import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';
import { Novedad } from 'src/app/models/novedad';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { FormControl } from '@angular/forms'; // Importa FormControl
import { NovedadService } from 'src/app/service/novedad.service';
import { ArchivoService } from 'src/app/service/archivo.service';


@Component({
  selector: 'app-novedades',
  templateUrl: './novedades.component.html',
  styleUrls: ['./novedades.component.css']
})
export class NovedadesComponent implements OnInit {

  months: any[] = [];
  years: number[] = [];

  date = new FormControl();
  novedades: Novedad[] = [];
  selectedPeriod: Date | null = null; // Variable para almacenar el período seleccionado

  selectedMonth: number = new Date().getMonth() + 1; // Valor predeterminado: mes actual
  selectedYear: number = new Date().getFullYear(); // Valor predeterminado: año actual


  constructor(private novedadService: NovedadService,
    private archivoService: ArchivoService) { }

  ngOnInit(): void {
      // Generar opciones de meses
      this.months = Array.from({ length: 12 }, (_, index) => {
        const monthNumber = index + 1;
        const monthName = new Date(2024, index).toLocaleString('es-ES', { month: 'long' });
        return { value: monthNumber, name: monthName };
      });
  
      // Generar opciones de años (por ejemplo, para los próximos 5 años)
      const currentYear = new Date().getFullYear();
      this.years = Array.from({ length: 5 }, (_, index) => currentYear + index);

    this.obtenerNovedades();
    this.filtrarNovedadesByMonth();
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
      const firstDayOfMonth = new Date(this.selectedPeriod.getFullYear(), this.selectedPeriod.getMonth(), 1);
      const lastDayOfMonth = new Date(this.selectedPeriod.getFullYear(), this.selectedPeriod.getMonth() + 1, 0); // Último día del mes
      this.novedadService.getNovedadesByPeriod(firstDayOfMonth, lastDayOfMonth).subscribe(
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

  
  filtrarNovedades2(): void {
    if (this.selectedPeriod !== null) {
      this.novedadService.getNovedadesByPeriod2(this.selectedPeriod).subscribe(
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

  // Método para manejar la selección de fecha en el datepicker
  onDateSelected(event: any): void {
    this.selectedPeriod = event.value;
  }

  filtrarNovedadesByMonth(): void {
  this.novedadService.getNovedadesByMonthAndYear(this.selectedMonth, this.selectedYear).subscribe(
    (data: Novedad[]) => {
      this.novedades = data;
    },
    (error: any) => {
      console.error('Error al filtrar las novedades por mes y año:', error);
    }
  );
}

imprimirPdfNovedades(): void {
  /*if (this.colaboradorActual) {
    this.archivoService.imprimirPdf(this.colaboradorActual).subscribe(
      (response: Blob) => {
        this.descargarArchivo(response, 'colaborador.pdf');
      },
      (error: any) => {
        console.error('Error al imprimir PDF:', error);
      }
    );
  }*/
}

generarExcelNovedades(): void {
  this.archivoService.generarExcel().subscribe(
    (response: Blob) => {
      this.descargarArchivo(response, 'colaboradores.xlsx');
    },
    (error: any) => {
      console.error('Error al generar Excel:', error);
    }
  );
}

private descargarArchivo(blob: Blob, nombreArchivo: string): void {
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = nombreArchivo;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

}
