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
  categoria: Categoria = new Categoria();
  convenios: Convenio[] = []; // Declaración de la propiedad convenios

  constructor(
    private categoriaService: CategoriaService, 
    private convenioService: ConvenioService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idCategoria = this.route.snapshot.params['id'];

    this.categoriaService.getCategoriaDetalles(idCategoria).subscribe(
      (data: Categoria) => {
        this.categoria = data;
      },
      error => {
        console.log(error);
      }
    );

    // Obtener la lista de convenios del servicio
    this.convenioService.convenio().subscribe(
      (data: Convenio[]) => {
        this.convenios = data;
      },
      error => {
        console.log(error);
      }
    );
  }

// Función para enviar la categoría editada
onSubmit() {
  if (this.categoria.idCategoria == null) {
    console.log("El ID de la categoría es undefined. No se puede editar.");
    return; // Salir del método onSubmit si el ID de la categoría es undefined
  }

  this.categoriaService.editar(this.categoria.idCategoria, this.categoria).subscribe(
    data => {
      console.log("Categoría editada exitosamente:", data);
      this.router.navigate(['/categoria']); // Redirigir a la lista de categorías después de la edición
    },
    error => {
      console.log("Error al editar la categoría:", error);
    }
  );
}

}



  