import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Professions, ProfessionsI } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ProfessionsService {
  private url = "http://localhost:3000";

  constructor(private pHttp: HttpClient) { }

  cargarProfessions(){
    const path = this.url + '/professions/';
    return this.pHttp.get<ProfessionsI[]>(path).pipe(
      map( (respuesta:ProfessionsI[]) =>{
        return respuesta.map( profesion => Professions.nuevoProfession(profesion))
        }
      )
    );
  }

  getProfessions(id: number) {
    const path = this.url + '/professions/' + id;
    return this.pHttp.get<ProfessionsI>(path)
  }

  eliminarProfession( id: number){
    const path = this.url + '/professions/' + id;
    console.log(path)
   return this.pHttp.delete(path);   
  }

  createProfession(pProfession: Professions) {
    const path = this.url + '/professions/';
    return this.pHttp.post(path, pProfession);
  }

  updateProfessions(professions: Professions , id:number) {
    const path = this.url + '/professions/' + id;
    return this.pHttp.put<ProfessionsI>(path, professions);
  }

}
