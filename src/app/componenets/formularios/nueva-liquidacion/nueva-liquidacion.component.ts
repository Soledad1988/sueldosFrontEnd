import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from 'src/app/service/colaborador.service';

@Component({
  selector: 'app-nueva-liquidacion',
  templateUrl: './nueva-liquidacion.component.html',
  styleUrls: ['./nueva-liquidacion.component.css']
})
export class NuevaLiquidacionComponent implements OnInit{
  
  lista:any=[];
 
  constructor(private colaboradorService: ColaboradorService){}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void
  {
    this.colaboradorService.colaborador().subscribe(
      res=>{
        this.lista=res;
        console.log(res);
      },
      err=>console.log(err)
    );

  }

}
