import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  email: string;
  user: firebase.User;

  constructor(public authService: AuthService) {

    authService.user.subscribe(user => {
      if(user){
        this.user = user;
        this.email = user.email
      }
    })

  }

  ngOnInit() {
  }

  resetPassword(){
    this.authService.sendPasswordReset(this.email)
  }

}
