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
import { EditarConvenioComponent } from './componenets/formularios/editar-convenio/editar-convenio.component';
import { CategoriasComponent } from './componenets/categorias/categorias.component';
import { LiquidacionComponent } from './componenets/liquidacion/liquidacion.component';
import { NuevaLiquidacionComponent } from './componenets/formularios/nueva-liquidacion/nueva-liquidacion.component';
import { CalcularLiquidacionComponent } from './componenets/calcular-liquidacion/calcular-liquidacion.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ObrasocialComponent } from './componenets/obrasocial/obrasocial.component';
import { RecibosComponent } from './componenets/recibos/recibos.component';

//import { CuitFormatDirective } from './path-to-your-directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColaboradoresComponent,
    NuevoColaboradorComponent,
    EditarColaboradorComponent,
    ConveniosComponent,
    EditarConvenioComponent,
    CategoriasComponent,
    LiquidacionComponent,
    NuevaLiquidacionComponent,
    CalcularLiquidacionComponent,
    ObrasocialComponent,
    RecibosComponent,
    
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
    MatNativeDateModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
