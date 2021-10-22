import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessionsI } from '../../model';
import { ProfessionsService } from '../../services/professions.service';

@Component({
  selector: 'app-editar-professions',
  templateUrl: './editar-professions.component.html',
  styleUrls: ['./editar-professions.component.css']
})
export class EditarProfessionsComponent implements OnInit {
  private professions:ProfessionsI[]=[];
  private id:number;
  formularioProfession:FormGroup;

  constructor(private pprofessionsService: ProfessionsService,  private pformulario:FormBuilder, private pActiveRoute:ActivatedRoute,private router: Router) { 
    
    this.id = this.pActiveRoute.snapshot.params.id; 
    this.getProfessions(this.id);
    this.formularioProfession = this.pformulario.group({
      name: [''], 
      description: ['']})
  }

  ngOnInit(): void {
  }

  getProfessions(id:number) {    
    this.pprofessionsService.getProfessions(id)
    .subscribe(respuesta => {
      this.professions[0] = respuesta; 
      this.formularioProfession.setValue({
        name:respuesta.name,
        description:respuesta.description
      })       
    });
  }

  enviarDatos(evento : Event){
    if(confirm("Desea grabar los datos?")) {
    evento.preventDefault();
    console.log(this.formularioProfession.value);  
    this.pprofessionsService.updateProfessions(this.formularioProfession.value, this.id)
    .subscribe(respuesta =>{
      this.router.navigate(['/profession'])
    }
    );
  }
}

}
