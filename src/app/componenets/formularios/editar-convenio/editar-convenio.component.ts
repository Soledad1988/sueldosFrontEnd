import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Convenio } from 'src/app/models/Convenio';
import { ConvenioService } from 'src/app/service/convenio.service';

@Component({
  selector: 'app-editar-convenio',
  templateUrl: './editar-convenio.component.html',
  styleUrls: ['./editar-convenio.component.css']
})
export class EditarConvenioComponent implements OnInit{

  id=null;
  actual:Convenio=new Convenio();
  suscription: Subscription = new Subscription();

  constructor(
    private convenioService:ConvenioService,
    private antivatedRouter: ActivatedRoute,
    private router:Router
    ) { }

    ngOnInit(): void {
      this.getConvenio();

      /*this.suscription = this.convenioService.refresh$.subscribe(()=>{
        this.getConvenio();
      })*/
    }

    
    getConvenio():void{
    this.antivatedRouter.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.convenioService.UnConvenio(id).subscribe(
            res=>this.actual=res
          );
        }
      }
    );
  }

  //metodo para implementar la logica del guardado
  guardar():void{
    console.log(this.actual);
    this.convenioService.guardar(this.actual).subscribe(
      res=>{

      this.router.navigate(['/convenio'])
    });
  } 

}
