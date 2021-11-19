import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;

  professions = [
    { id: 1, name: 'None' },
    { id: 2, name: 'Profession 1' },
    { id: 3, name: 'Profession 2' },
    { id: 4, name: 'Profession 3' },
  ]

  constructor(private router: Router) {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email :  new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      age: new FormControl(0, [Validators.required, Validators.min(10)]),
      interests: new FormControl([]),
      user_type: new FormControl('1', Validators.required),
      years_experience: new FormControl(0),
      professionId: new FormControl(1)
    });
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email :  new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      age: new FormControl(0, Validators.required),
      interests: new FormControl([]),
      user_type: new FormControl('1', Validators.required),
      years_experience: new FormControl(0),
      professionId: new FormControl(1)
    });
  }

  onLogin(){
    this.router.navigate(['home/login']);
  }

  onRegister(){

  }
}
