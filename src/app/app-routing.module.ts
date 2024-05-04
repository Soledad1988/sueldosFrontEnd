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
import { ObrasocialComponent } from './componenets/obrasocial/obrasocial.component';
import { NuevaNovedadComponent } from './componenets/formularios/nueva-novedad/nueva-novedad.component';
import { NovedadesComponent } from './componenets/novedades/novedades.component';
import { EditarObrasocialComponent } from './componenets/formularios/editar-obrasocial/editar-obrasocial.component';
import { EditarCategoriaComponent } from './componenets/formularios/editar-categoria/editar-categoria.component';

const routes: Routes = [
  {path:'', redirectTo:'menu', pathMatch:'full'},
  {path:'menu', component:HomeComponent},
  {path:'colaborador', component:ColaboradoresComponent},
  {path:'nuevo', component:NuevoColaboradorComponent},
  {path:'editar/:id', component:EditarColaboradorComponent},
  {path:'convenio', component:ConveniosComponent},
  {path:'editarC/:id', component:EditarConvenioComponent},
  {path:'categoria', component:CategoriasComponent},
  {path:'editarCate/:id', component:EditarCategoriaComponent},
  {path:'obrasocial', component:ObrasocialComponent},
  {path:'editarObra/:id', component: EditarObrasocialComponent },
  {path:'liquidacion', component:LiquidacionComponent},
  {path:'nuevaLiquidacion', component:NuevaLiquidacionComponent},
  {path:'nuevaNovedad', component:NuevaNovedadComponent},
  {path:'novedades', component:NovedadesComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
