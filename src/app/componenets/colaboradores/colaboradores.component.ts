import { Component, OnInit } from '@angular/core';
import { Colaborador } from 'src/app/models/colaborador';
import { ArchivoService } from 'src/app/service/archivo.service';
import { ColaboradorService } from 'src/app/service/colaborador.service';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit{

  colaboradores: Colaborador[] = [];
  colaboradorActual: Colaborador | null = null;
  indiceActual = 0;

  filtroEstado: boolean = true; // Inicializar con el valor de true o false según corresponda
  estadoSeleccionado: boolean = true;  // Variable para rastrear el estado seleccionado en la lista desplegable

  constructor(private colaboradorService: ColaboradorService,
    private archivoService: ArchivoService) {}

  ngOnInit(): void {
    this.listarColaboradores();
    //this.aplicarFiltro(this.filtroEstado);
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

  EstadoColaborador(colaborador: Colaborador) {
    if (colaborador.id !== undefined) {
      const nuevoEstado = !colaborador.activo; // Cambia el estado al contrario del actual
      this.colaboradorService.cambiarEstadoColaborador(colaborador.id, nuevoEstado)
        .subscribe({
          next: (response) => {
            // Actualiza la lista o el estado del colaborador en la vista
            colaborador.activo = nuevoEstado; // Actualiza el estado del colaborador localmente
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
  
  

  imprimirPdf(): void {
    if (this.colaboradorActual) {
      this.archivoService.imprimirPdf(this.colaboradorActual).subscribe(
        (response: Blob) => {
          this.descargarArchivo(response, 'colaborador.pdf');
        },
        (error: any) => {
          console.error('Error al imprimir PDF:', error);
        }
      );
    }
  }

  generarExcel(): void {
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

  aplicarFiltro(estado: boolean) {
    // Actualizar el estado seleccionado
    this.filtroEstado = estado;
  
    // Llamar al método para cargar los colaboradores filtrados
    this.colaboradorService.getColaboradoresPorEstado(estado).subscribe(
      (colaboradores: Colaborador[]) => {
        this.colaboradores = colaboradores;
        if (this.colaboradores.length > 0) {
          this.colaboradorActual = this.colaboradores[0];
        }
      },
      (error: any) => {
        console.error('Error al cargar los colaboradores:', error);
      }
    );
  }
  
}
