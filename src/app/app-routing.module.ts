import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componenets/home/home.component';
import { ColaboradoresComponent } from './componenets/colaboradores/colaboradores.component';
import { NuevoColaboradorComponent } from './componenets/formularios/nuevo-colaborador/nuevo-colaborador.component';
import { EditarColaboradorComponent } from './componenets/formularios/editar-colaborador/editar-colaborador.component';
import { ConveniosComponent } from './componenets/convenios/convenios.component';
import { EditarConvenioComponent } from './componenets/formularios/editar-convenio/editar-convenio.component';
import { CategoriasComponent } from './componenets/categorias/categorias.component';
import { LiquidacionComponent } from './componenets/liquidacion/liquidacion.component';
import { NuevaLiquidacionComponent } from './componenets/formularios/nueva-liquidacion/nueva-liquidacion.component';
import { CalcularLiquidacionComponent } from './componenets/calcular-liquidacion/calcular-liquidacion.component';
import { ObrasocialComponent } from './componenets/obrasocial/obrasocial.component';
import { RecibosComponent } from './componenets/recibos/recibos.component';

const routes: Routes = [
  {path:'', redirectTo:'menu', pathMatch:'full'},
  {path:'menu', component:HomeComponent},
  {path:'colaborador', component:ColaboradoresComponent},
  {path:'nuevo', component:NuevoColaboradorComponent},
  {path:'editar/:id', component:EditarColaboradorComponent},
  {path:'convenio', component:ConveniosComponent},
  {path:'categoria', component:CategoriasComponent},
  {path:'editarC/:id', component:EditarConvenioComponent},
  {path:'obrasocial', component:ObrasocialComponent},
  {path:'liquidacion', component:LiquidacionComponent},
  {path:'nuevaLiquidacion', component:NuevaLiquidacionComponent}, 
  {path:'calcularLiquidacion', component:CalcularLiquidacionComponent},
  {path:'recibos', component:RecibosComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
