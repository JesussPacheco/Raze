import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './router/app-routing.module'
import { AppComponent } from './app.component';
import { AddFashionComponent } from './components/fashions/pages/add-fashion/add-fashion.component';
import { FashionFeatureComponent } from './components/fashions/pages/fashion-feature/fashion-feature.component';
import { FashionsListComponent } from './components/fashions/pages/fashions-list/fashions-list.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./material/material.module";


@NgModule({
  declarations: [
    AppComponent,
    AddFashionComponent,
    FashionFeatureComponent,
    FashionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
