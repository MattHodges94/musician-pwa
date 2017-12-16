import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  user: firebase.User;

  constructor(public authService: AuthService) {
    
  }

  ngOnInit(){
    this.authService.user.subscribe(user => {
      this.user = user;
    })
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';    
  }

  logout() {
    this.authService.logout();
  }

}
