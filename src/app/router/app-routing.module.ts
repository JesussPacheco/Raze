import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProfessionsComponent, EditarProfessionsComponent, ListaProfessionsComponent } from '../components/professions/pages';

const routes: Routes = [
  { path: 'profession', component: ListaProfessionsComponent },
  { path: 'profession/editar/:id', component: EditarProfessionsComponent },
  { path: 'profession/agregar', component: AgregarProfessionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
