import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componenets/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColaboradoresComponent } from './componenets/colaboradores/colaboradores.component';

import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

//externos
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NuevoColaboradorComponent } from './componenets/formularios/nuevo-colaborador/nuevo-colaborador.component';
import { EditarColaboradorComponent } from './componenets/formularios/editar-colaborador/editar-colaborador.component';
import { ConveniosComponent } from './componenets/convenios/convenios.component';
import { NuevoConvenioComponent } from './componenets/formularios/nuevo-convenio/nuevo-convenio.component';
import { EditarConvenioComponent } from './componenets/formularios/editar-convenio/editar-convenio.component';
import { CategoriasComponent } from './componenets/categorias/categorias.component';
import { NuevaCategoriaComponent } from './componenets/formularios/nueva-categoria/nueva-categoria.component';
import { LiquidacionComponent } from './componenets/liquidacion/liquidacion.component';
import { NuevaLiquidacionComponent } from './componenets/formularios/nueva-liquidacion/nueva-liquidacion.component';
import { CalcularLiquidacionComponent } from './componenets/calcular-liquidacion/calcular-liquidacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColaboradoresComponent,
    NuevoColaboradorComponent,
    EditarColaboradorComponent,
    ConveniosComponent,
    NuevoConvenioComponent,
    EditarConvenioComponent,
    CategoriasComponent,
    NuevaCategoriaComponent,
    LiquidacionComponent,
    NuevaLiquidacionComponent,
    CalcularLiquidacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
