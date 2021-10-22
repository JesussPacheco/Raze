import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfessionsService } from '../../services/professions.service';

@Component({
  selector: 'app-agregar-professions',
  templateUrl: './agregar-professions.component.html',
  styleUrls: ['./agregar-professions.component.css']
})
export class AgregarProfessionsComponent implements OnInit {
  formularioProfession:FormGroup;
  
  constructor(private pprofessionsService: ProfessionsService, private formularioProfessionBuilder: FormBuilder, private router: Router) {
    this.formularioProfession = this.formularioProfessionBuilder.group({
      name: [''], 
      description: ['']})
   }

  ngOnInit(): void {
  }

  enviarDatos(evento : Event){   
    evento.preventDefault();
    console.log(this.formularioProfession.value);  
    this.pprofessionsService.createProfession(this.formularioProfession.value).subscribe(
      respuesta =>{
        if(confirm("Desea agregar un nuevo registro?")) {
        this.router.navigate(['/profession/agregar'])
      }else{
        this.router.navigate(['/profession'])
      }
    }
    );    
}

}
