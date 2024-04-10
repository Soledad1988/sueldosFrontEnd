import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convenio } from 'src/app/models/Convenio';
import { Categoria } from 'src/app/models/categorias';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { ConvenioService } from 'src/app/service/convenio.service';
import Swal from 'sweetalert2';
import { ObrasocialService } from 'src/app/service/obrasocial.service';
import { ObraSocial } from 'src/app/models/ObraSocial';

@Component({
  selector: 'app-nuevo-colaborador',
  templateUrl: './nuevo-colaborador.component.html',
  styleUrls: ['./nuevo-colaborador.component.css']
})
export class NuevoColaboradorComponent implements OnInit{

  
  convenios: Convenio[] = [];
  categorias: Categoria[] = [];
  obraSocial: ObraSocial[] = [];

  nuevoColaborador = {
    nombre: '',
    apellido: '',
    dni: '',
    cuit: '',
    nacimiento: '',
    edad: '',
    direccion: '',
    fecha_ingreso: '',
    activo: true,
    categoria: { idCategoria: 0 },
    obraSocial: { idObraSocial: 0 },
    convenio: { idConvenio: 0 },
    novedad : { idNovedad: 0 } 
  }


  constructor(private colaboradorService: ColaboradorService,
    private convenioService:ConvenioService,
    private categoriaService:CategoriaService,
    private obraSocialService: ObrasocialService,
    private router:Router,
    ){ }


  ngOnInit(): void {

    this.convenioService.convenio().subscribe(
      (dato:any) => {
        this.convenios = dato;
        console.log(this.convenios);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )

    //++++++++++++++++++++++++++++

    this.categoriaService.categoria().subscribe(
      (dato:any) => {
        this.categorias = dato;
        console.log(this.categorias);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )

    //++++++++++++++++++++++++++++

    this.obraSocialService.obraSocial().subscribe(
      (dato:any) => {
        this.obraSocial = dato;
        console.log(this.obraSocial);
      },(error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los datos','error');
      }
    )

  }

  agregar(){
    console.log(this.nuevoColaborador);

    this.colaboradorService.crearColaborador(this.nuevoColaborador).subscribe(
      (data) => {
        console.log(data);

        Swal.fire('Colaborador guardado','El colaborador ha sido guardado con éxito.','success');
        this.nuevoColaborador = {
          nombre: '',
          apellido: '',
          dni: '',
          cuit: '',
          nacimiento: '',
          edad: '',
          direccion: '',
          fecha_ingreso: '',
          activo: true,
          categoria: { idCategoria: 0 },
          obraSocial: { idObraSocial: 0 },
          convenio: { idConvenio: 0 },
          novedad : { idNovedad: 0 }
        }
        this.router.navigate(['/colaborador']);
      },
      (error) => {
        Swal.fire('Error','Error al guardar el registro','error');
      }
    )
  }

  onConvenioChange(): void {
    const idConvenio = +this.nuevoColaborador.convenio.idConvenio;
    if (!isNaN(idConvenio)) {
      this.categoriaService.getCategoriasPorConvenio(idConvenio)
        .subscribe(
          (categorias) => {
            this.categorias = categorias;
          },
          (error) => {
            console.error('Error al cargar categorías', error);
          }
        );
    }
  }

}
