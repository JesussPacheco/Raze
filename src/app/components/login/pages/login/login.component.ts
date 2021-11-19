import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {StorageService} from "../../../shared/services/storage.service";
import {AuthenticateResponse} from "../../../security/model/authenticate.response";
import {AuthenticationService} from "../../../security/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  loginForm: FormGroup;
  hide = true;
  constructor(private router: Router, private service: AuthenticationService, private storage: StorageService) {
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
  }

  onLogin(){
    this.service.authenticate({email: this.loginForm.controls['email'].value, password: this.loginForm.controls['password'].value}).subscribe(
      (response: AuthenticateResponse) => {
        this.storage.saveToken(response.token);
        this.storage.saveUser(response);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        let user = this.storage.getUser();
        this.roles = user ? user.roles : [];
      });
    this.router.navigate(['/posts/2']);
  }

  reloadPage(): void {
    window.location.reload();
  }

  onRegister(){
    this.router.navigate(['/register']);
  }
}
