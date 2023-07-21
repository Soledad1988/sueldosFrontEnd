import { Component, OnInit } from '@angular/core';
import { ConvenioService } from 'src/app/service/convenio.service';

@Component({
  selector: 'app-convenios',
  templateUrl: './convenios.component.html',
  styleUrls: ['./convenios.component.css']
})
export class ConveniosComponent implements OnInit{

  lista:any=[];
  
  constructor(private convenioService: ConvenioService){}

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

}
