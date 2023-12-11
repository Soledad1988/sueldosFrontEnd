import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { ConvenioService } from 'src/app/service/convenio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-colaborador',
  templateUrl: './nuevo-colaborador.component.html',
  styleUrls: ['./nuevo-colaborador.component.css']
})
export class NuevoColaboradorComponent implements OnInit{

  convenios: any[] = [];

  categorias: any[] = [];

  nuevoColaborador = {
    id:'',
    nombre:'',
    apellido:'',
    dni:'',
    nacimiento:'',
    edad:'',
    direccion:'',
    activo:'false',
    convenio:{
      idConvenio:''
    },
    categoria:{
      idCategoria:''
    }
  }


  constructor(private colaboradorService: ColaboradorService,
    private convenioService:ConvenioService,
    private categoriaService:CategoriaService,
    private router:Router){}

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
  }

  agregar(){
    console.log(this.nuevoColaborador);

    this.colaboradorService.crearColaborador(this.nuevoColaborador).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Colaborador guardado','El colaborador ha sido guardado con éxito','success');
        this.nuevoColaborador = {
          id:'',
          nombre:'',
          apellido:'',
          dni:'',
          nacimiento:'',
          edad:'',
          direccion:'',
          activo:'false',
          convenio:{
            idConvenio:''
          },
          categoria:{
            idCategoria:''
          }
        }
        this.router.navigate(['/colaborador']);
      },
      (error) => {
        Swal.fire('Error','Error al guardar el registro','error');
      }
    )
  }

}
