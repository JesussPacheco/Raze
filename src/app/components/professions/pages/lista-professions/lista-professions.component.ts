import { Component, OnInit } from '@angular/core';
import { Professions } from '../../model';
import { ProfessionsService } from '../../services/professions.service';

@Component({
  selector: 'app-lista-professions',
  templateUrl: './lista-professions.component.html',
  styleUrls: ['./lista-professions.component.css']
})
export class ListaProfessionsComponent implements OnInit {
  public professions:Professions[] =[] ;
  
  constructor(private pprofessionsService: ProfessionsService) { }

  ngOnInit(): void {
    this.getAllProfessions()
  }

  getAllProfessions() {
    this.pprofessionsService.cargarProfessions()
    .subscribe(respuesta => {
      this.professions = respuesta;
      console.log(respuesta)
    });
  }

  deleteProfessions( id:number) {
    if(confirm("Desea eliminar el id "+ id)) {
    this.pprofessionsService.eliminarProfession(id).subscribe(respuesta=>{
      this.getAllProfessions();
    }
    );
  }
}

}
