import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {StorageService} from "../../../shared/services/storage.service";
import {AuthenticateResponse} from "../../../security/model/authenticate.response";
import {AuthenticationService} from "../../../security/services/authentication.service";
import {UserService} from "../../../security/services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];
  message: string = '';
  loginForm: FormGroup;
  hide = true;
  constructor(private router: Router, private userService: UserService, private service: AuthenticationService, private storage: StorageService) {
    this.loginForm = new FormGroup({
      email:  new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email :  new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
    if (this.storage.getToken()) {
      this.isLoggedIn = true;
      let user = this.storage.getUser();
      if (user) {
        this.roles = user.roles;
      }
    }
    this.message = '';
  }

  onLogin() {
    this.userService.findByEmail(this.loginForm.controls['email'].value)
      .subscribe(data => {
        if(data[0] == null){
          console.log(data);
          console.log("Email not found");
          this.message = 'Email not found';
        }
        else if (data[0].password != this.loginForm.controls['password'].value){
          console.log("Incorrect password");
          this.message = 'Incorrect password';
        }
        else{
          this.service.authenticate({email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value}).subscribe(
            (response: AuthenticateResponse) => {
              this.storage.saveToken(response.token);
              //this.storage.saveUser(response);
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              let user = this.storage.getUser();
              this.roles = user ? user.roles : [];
            });
          this.router.navigate([`home/${data[0].id}/posts`]);
        }
      })


    //this.router.navigate(['home/posts']);
    //this.router.navigate(['/posts/2']);
  }

  reloadPage(): void {
    window.location.reload();
  }

  onRegister(){
    this.router.navigate(['/register']);
  }
}
