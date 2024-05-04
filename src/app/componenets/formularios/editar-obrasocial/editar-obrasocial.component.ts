import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObraSocial } from 'src/app/models/ObraSocial';
import { ObrasocialService } from 'src/app/service/obrasocial.service';

@Component({
  selector: 'app-editar-obrasocial',
  templateUrl: './editar-obrasocial.component.html',
  styleUrls: ['./editar-obrasocial.component.css']
})
export class EditarObrasocialComponent implements OnInit{

 
  actual: ObraSocial = {};

  constructor(
      private obrasocialService: ObrasocialService,
      private activatedRoute: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit(): void {
      this.getObraSocial();
  }

  getObraSocial(): void {
      this.activatedRoute.params.subscribe(params => {
          const idObrasocial = params['id'];
          console.log('ID de la obra social:', idObrasocial); // Agrega esta línea para depurar el ID
          if (idObrasocial) {
              this.obrasocialService.UnaObraSocial(idObrasocial).subscribe(
                  res => {
                      this.actual = res;
                  },
                  error => {
                      console.error('Error al obtener la obra social:', error);
                  }
              );
          }
      });
  }

  guardar(): void {
      console.log('Obra social a guardar:', this.actual);
      this.obrasocialService.guardar(this.actual).subscribe(
          res => {
              console.log('Obra social actualizada correctamente:', res);
              this.router.navigate(['/obrasocial']);
          },
          error => {
              console.error('Error al guardar la obra social:', error);
              // Manejo de errores: mostrar mensaje de error al usuario
          }
      );
  }

  cancelar(): void {
    // Redirigir al usuario a la vista de lista de obras sociales o a donde sea necesario
    this.router.navigate(['/obrasocial']);
}

}