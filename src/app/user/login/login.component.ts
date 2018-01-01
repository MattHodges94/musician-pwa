import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  userPassword: string;
  user: firebase.User;

  constructor(public authService: AuthService) {
    
  }

  ngOnInit(){
    this.authService.user.subscribe(user => {
      this.user = user;
    })
  }


  login() {
    this.authService.login(this.userEmail, this.userPassword);
  }

  logout() {
    this.authService.logout();
  }

}
