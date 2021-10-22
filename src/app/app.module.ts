import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './router/app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import { ListaProfessionsComponent } from './components/professions/pages/lista-professions/lista-professions.component';
import { AgregarProfessionsComponent } from './components/professions/pages/agregar-professions/agregar-professions.component';
import { EditarProfessionsComponent } from './components/professions/pages/editar-professions/editar-professions.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListaProfessionsComponent,
    AgregarProfessionsComponent,
    EditarProfessionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
