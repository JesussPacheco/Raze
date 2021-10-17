import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InterestsListComponent } from './elements/interests-list/interests-list.component';
import {InterestFeatureComponent } from './elements/interest-feature/interest-feature.component';
import { AddInterestComponent } from './elements/add-interest/add-interest.component';

const routes: Routes = [
  { path: '', redirectTo: 'interests', pathMatch: 'full' },
  { path: 'interests', component: InterestsListComponent },
  { path: 'interests/:id', component: InterestFeatureComponent },
  { path: 'add', component: AddInterestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
