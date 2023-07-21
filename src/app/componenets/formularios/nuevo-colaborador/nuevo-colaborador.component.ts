import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/service/colaborador.service';

@Component({
  selector: 'app-nuevo-colaborador',
  templateUrl: './nuevo-colaborador.component.html',
  styleUrls: ['./nuevo-colaborador.component.css']
})
export class NuevoColaboradorComponent implements OnInit{

  nuevo: Colaborador = new Colaborador();

  constructor(private colaboradorService:ColaboradorService, 
    private router:Router, 
    private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
  }

  agregar(){
    this.colaboradorService.guardar(this.nuevo).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/colaborador']);
      },
      err=>console.log(err)
    );
  }

}
