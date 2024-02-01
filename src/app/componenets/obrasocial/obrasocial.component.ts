import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObraSocial } from 'src/app/models/ObraSocial';
import { ObrasocialService } from 'src/app/service/obrasocial.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-obrasocial',
  templateUrl: './obrasocial.component.html',
  styleUrls: ['./obrasocial.component.css']
})
export class ObrasocialComponent implements OnInit{

  title='Obra Social Registarda';

  nuevo: ObraSocial = new ObraSocial();
  
  lista:any=[];
  
  constructor(private obraSocialService: ObrasocialService,
    private router:Router,){}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void
  {
    this.obraSocialService.obraSocial().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

  eliminar(idObrasocial:number){
    this.obraSocialService.eliminar(idObrasocial).subscribe(
      res=>{this.ngOnInit()
        ;},
      err=>console.log(err)
    );
  }

  agregar(){
    this.obraSocialService.guardar(this.nuevo).subscribe(
      res=>{
        console.log(res);
        Swal.fire(this.title,`Obra Social creada con exito`, 'success') 
        this.router.navigate(['/obrasocial']);
      },
      err=>console.log(err)
    );
  }


}
