import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/service/colaborador.service';

@Component({
  selector: 'app-editar-colaborador',
  templateUrl: './editar-colaborador.component.html',
  styleUrls: ['./editar-colaborador.component.css']
})
export class EditarColaboradorComponent implements OnInit {
  //actual: Colaborador = new Colaborador();
  actual: Colaborador = {
    categoria: {
      convenio: undefined // Inicializa convenio como undefined
    }
  };
  
  suscripcion: Subscription = new Subscription();

  constructor(
    private colaboradorService: ColaboradorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getColaborador();

    this.suscripcion = this.colaboradorService.refresh$.subscribe(() => {
      this.getColaborador();
    });
  }

  getColaborador(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.colaboradorService.UnColaborador(id).subscribe(
          res => {
            this.actual = res;
            // Convierte la fecha de nacimiento de string a Date
            this.actual.nacimiento = new Date(this.actual.nacimiento + 'T00:00:00'); // Añade la hora para formar un formato ISO 8601
          },
          error => {
            console.error('Error al obtener el colaborador:', error);
          }
        );
      }
    });
  }

  guardar(): void {
    console.log('Colaborador actual:', this.actual);
    this.colaboradorService.crearColaborador(this.actual).subscribe(
      res => {
        console.log('Colaborador actualizado correctamente:', res);
        this.router.navigate(['/colaborador']);
      },
      error => {
        console.error('Error al guardar el colaborador:', error);
      }
    );
  }
}