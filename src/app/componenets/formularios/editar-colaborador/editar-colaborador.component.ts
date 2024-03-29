import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/service/colaborador.service';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-editar-colaborador',
  templateUrl: './editar-colaborador.component.html',
  styleUrls: ['./editar-colaborador.component.css']
})
export class EditarColaboradorComponent implements OnInit{

  id=null;
  actual:Colaborador=new Colaborador();
  suscription: Subscription = new Subscription();

  constructor(
    private colaboradorService:ColaboradorService,
    private antivatedRouter: ActivatedRoute,
    private router:Router,
    private el: ElementRef
    ) { }

    ngOnInit(): void {
      this.getColaborador();

      this.suscription = this.colaboradorService.refresh$.subscribe(()=>{
        this.getColaborador();
      })
    }

    
    getColaborador():void{
    this.antivatedRouter.params.subscribe(
      e=>{
        let id=e['id'];
        if(id){
          this.colaboradorService.UnColaborador(id).subscribe(
            res=>this.actual=res
          );
        }
      }
    );
  }

  //metodo para implementar la logica del guardado
  guardar():void{
    console.log(this.actual);
    this.colaboradorService.guardar(this.actual).subscribe(
      res=>{

      this.router.navigate(['/colaborador'])
    });
  } 

  _fechaNacimiento!: string;

  get fechaNacimiento(): string {
    if (this._fechaNacimiento === undefined) {
      // Manejar el caso undefined, por ejemplo, devolver un valor predeterminado o lanzar un error
      return ''; // o manejar de otra manera
    }
    return this._fechaNacimiento;
  }

  set nacimiento(value: string) {
    // Realiza cualquier transformación necesaria antes de asignarla
    this._fechaNacimiento = value;
  }

  //formato cuit
  @HostListener('input', ['$event']) onInput(event: any) {
    const inputVal = event.target.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
    if (inputVal.length <= 11) {
      event.target.value = this.formatCuit(inputVal);
    }
  }

  private formatCuit(value: string): string {
    const formattedCuit = value.replace(/(\d{2})(\d{8})(\d{1})/, '$1-$2-$3');
    return formattedCuit;
  }
}
