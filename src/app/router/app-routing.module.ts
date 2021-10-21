import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FashionsListComponent} from "../components/fashions/pages/fashions-list/fashions-list.component";
import {FashionFeatureComponent} from "../components/fashions/pages/fashion-feature/fashion-feature.component";
import {AddFashionComponent} from "../components/fashions/pages/add-fashion/add-fashion.component";


const routes: Routes = [
  { path: '', redirectTo: 'fashions', pathMatch: 'full' },
  { path: 'fashions', component: FashionsListComponent },
  { path: 'fashions/:id', component: FashionFeatureComponent },
  { path: 'add-fashion', component: AddFashionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
