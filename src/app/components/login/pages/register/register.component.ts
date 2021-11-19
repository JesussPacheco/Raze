import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {InterestService} from "../../../interest/services/interest.service";
import {Interest} from "../../../interest/model/interest.model";
import {User} from "../../../security/model/user.model";
import {UserService} from "../../../security/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  interests?: Interest [];
  professions = [
    { id: 1, name: 'None' }
  ];

  /*
  * professions = [
    { id: 1, name: 'None' },
    { id: 2, name: 'Profession 1' },
    { id: 3, name: 'Profession 2' },
    { id: 4, name: 'Profession 3' },
  ]
  * */


  constructor(private router: Router, private interestService: InterestService, private userService: UserService) {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email :  new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      age: new FormControl(0, [Validators.required, Validators.min(10)]),
      user_type: new FormControl('1', Validators.required),
      years_experience: new FormControl(0),
      professionId: new FormControl(1),
      interestId: new FormControl(1)
    });
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      email :  new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      age: new FormControl(0, Validators.required),
      user_type: new FormControl('1', Validators.required),
      years_experience: new FormControl(0),
      professionId: new FormControl(1),
      interestId: new FormControl(1)
    });
    this.retrieveInterests();
  }

  retrieveInterests() :void{
    this.interestService.getAll()
      .subscribe(
        data => {
          this.interests = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  onLogin(){
    this.router.navigate(['/login']);
  }

  onRegister(): void {
    let data = {}
    if (this.registerForm.controls['user_type'].value === 'Advised'){
      data = {
        name: this.registerForm.controls['name'].value,
        username: this.registerForm.controls['username'].value,
        age: this.registerForm.controls['age'].value,
        interestId: this.registerForm.controls['interestId'].value,
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        userType: this.registerForm.controls['user_type'].value
      }
    }
    else if (this.registerForm.controls['user_type'].value === 'Advisor'){
      data = {
        name: this.registerForm.controls['name'].value,
        username: this.registerForm.controls['username'].value,
        age: this.registerForm.controls['age'].value,
        interestId: this.registerForm.controls['interestId'].value,
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        userType: this.registerForm.controls['user_type'].value,
        yearsExperience: this.registerForm.controls['years_experience'].value,
        //professionId: this.registerForm.controls['professionId'].value
      };
    }

    this.userService.create(data)
      .subscribe(response => {
        console.log(response);
      },
        error => {
          console.log(error);
        });
  }
}
