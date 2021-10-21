import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OutfitTypesManagementComponent} from "../components/outfit-types/pages/outfit-types-management/outfit-types-management.component";


const routes: Routes = [
  { path: 'outfit-types', component: OutfitTypesManagementComponent,  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
