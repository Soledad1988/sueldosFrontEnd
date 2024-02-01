import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Convenio } from 'src/app/models/Convenio';
import { ConvenioService } from 'src/app/service/convenio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.css']
})
export class ConveniosComponent implements OnInit{
  title='Convenio Registardo';

  nuevo: Convenio = new Convenio();
  lista:any=[];
  
  constructor(private convenioService: ConvenioService, private router:Router){}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void
  {
    this.convenioService.convenio().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(idConvenio:number){
    this.convenioService.eliminar(idConvenio).subscribe(
      res=>{this.ngOnInit()
        ;},
      err=>console.log(err)
    );
  }

  agregar(){
    this.convenioService.guardar(this.nuevo).subscribe(
      res=>{
        console.log(res);
        Swal.fire(this.title,`Convenio creado con exito`, 'success') //${res.idConvenio}
        this.router.navigate(['/convenio']);
      },
      err=>console.log(err)
    );
  }

}
