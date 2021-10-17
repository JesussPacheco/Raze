import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddInterestComponent } from './elements/add-interest/add-interest.component';
import { InterestFeatureComponent } from './elements/interest-feature/interest-feature.component';
import { InterestsListComponent } from './elements/interests-list/interests-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddInterestComponent,
    InterestFeatureComponent,
    InterestsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
