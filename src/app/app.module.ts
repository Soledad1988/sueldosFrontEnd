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
import { NuevoColaboradorComponent } from './componenets/formularios/nuevo-colaborador/nuevo-colaborador.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColaboradoresComponent,
    NuevoColaboradorComponent
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
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
