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

  filtroEstado: string = 'activos'; // Inicializar el filtro con "activos" por defecto

  constructor(private colaboradorService: ColaboradorService,
    private archivoService: ArchivoService) {}

  ngOnInit(): void {
    this.listarColaboradores();
    //this.aplicarFiltro(this.filtroEstado);
  }

  listarColaboradores(): void {
    let filtro: boolean | null = null; // Cambio aquí
    if (this.filtroEstado === 'activos') {
      filtro = true;
    }
    this.colaboradorService.getColaboradoresPorEstado(filtro).subscribe(
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
    console.log('Ir colaborador anterior');
    if (this.indiceActual > 0) {
      this.indiceActual--;
      this.colaboradorActual = this.colaboradores[this.indiceActual];
    } else {
      console.log('Estamos en el primer colaborador, yendo al último');
      // Si estamos en el primer colaborador, vamos al último
      this.indiceActual = this.colaboradores.length - 1;
      this.colaboradorActual = this.colaboradores[this.indiceActual];
    }
  }
  
  irColaboradorSiguiente(): void {
    console.log('Ir colaborador siguiente');
    if (this.indiceActual < this.colaboradores.length - 1) {
      this.indiceActual++;
      this.colaboradorActual = this.colaboradores[this.indiceActual];
    } else {
      console.log('Estamos en el último colaborador, yendo al primero');
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

  aplicarFiltro(estado: string) {
    // Asignar el estado del filtro
    this.filtroEstado = estado;

    // Llamar al método para cargar los colaboradores filtrados
    this.listarColaboradores();
  }
}
