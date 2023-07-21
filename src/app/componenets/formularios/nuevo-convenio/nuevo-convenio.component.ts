import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convenio } from 'src/app/models/Convenio';
import { ConvenioService } from 'src/app/service/convenio.service';

@Component({
  selector: 'app-nuevo-convenio',
  templateUrl: './nuevo-convenio.component.html',
  styleUrls: ['./nuevo-convenio.component.css']
})
export class NuevoConvenioComponent implements OnInit{

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
        this.router.navigate(['/convenio']);
      },
      err=>console.log(err)
    );
  }

}
