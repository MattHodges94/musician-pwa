import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  signup() {
    this.authService.signup(this.userEmail, this.userPassword);
  }

}
