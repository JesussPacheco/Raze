import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class ChatLoginComponent implements OnInit {
  userLogged = this.authService.getUserLogged();

  usuario = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService) {

  }

  loginWithGoogle() {
    const { email, password } = this.usuario;
    this.authService.loginWithGoogle(email, password).then(res => {
      console.log("Logged in: ", res);
    })

  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
