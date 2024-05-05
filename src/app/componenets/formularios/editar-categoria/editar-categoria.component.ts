import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convenio } from 'src/app/models/Convenio';
import { Categoria } from 'src/app/models/categorias';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ConvenioService } from 'src/app/service/convenio.service';



@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {

  actual: Categoria = {};
  convenios: Convenio[] = []; // Declaración de la propiedad convenios

  constructor(
    private categoriaService: CategoriaService, 
    private convenioService: ConvenioService, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategoria();
}

getCategoria(): void {
    this.activatedRoute.params.subscribe(params => {
        const idCategoria = params['id'];
        if (idCategoria) {
            this.categoriaService.UnaCategoria(idCategoria).subscribe(
                res => {
                    this.actual = res;
                },
                error => {
                    console.error('Error al obtener la categoria:', error);
                }
            );
        }
    });
}

guardar(): void {
    console.log('Categoria a guardar:', this.actual);
    this.categoriaService.guardar(this.actual).subscribe(
        res => {
            console.log('Categoria actualizada correctamente:', res);
            this.router.navigate(['/categoria']);
        },
        error => {
            console.error('Error al guardar la categoria:', error);
            // Manejo de errores: mostrar mensaje de error al usuario
        }
    );
}

cancelar(): void {
  // Redirigir al usuario a la vista de lista de obras sociales o a donde sea necesario
  this.router.navigate(['/obrasocial']);
  }
}



  