import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './router/app-routing.module'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./material/material.module";
import {HttpClientModule} from "@angular/common/http";
import { OutfitTypesManagementComponent } from './components/outfit-types/pages/outfit-types-management/outfit-types-management.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { OutfitTypeItemComponent } from './components/outfit-types/pages/outfit-type-item/outfit-type-item.component';
@NgModule({
  declarations: [
    AppComponent,
    OutfitTypesManagementComponent,
    OutfitTypeItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
