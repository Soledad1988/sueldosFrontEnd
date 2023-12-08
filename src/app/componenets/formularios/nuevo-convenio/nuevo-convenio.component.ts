import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convenio } from 'src/app/models/Convenio';
import { ConvenioService } from 'src/app/service/convenio.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-nuevo-convenio',
  templateUrl: './nuevo-convenio.component.html',
  styleUrls: ['./nuevo-convenio.component.css']
})
export class NuevoConvenioComponent implements OnInit{

  title='Convenio Registardo';

  nuevo: Convenio = new Convenio();

  constructor(private convenioService:ConvenioService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    
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
