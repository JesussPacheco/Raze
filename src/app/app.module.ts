import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './router/app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import { OutfitTypesManagementComponent } from './components/outfit-types/pages/outfit-types-management/outfit-types-management.component';
@NgModule({
  declarations: [
    AppComponent,
    OutfitTypesManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
