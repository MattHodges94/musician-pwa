import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import * as firebase from 'firebase/app';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  userPassword: string;


  constructor(public authService: AuthService, private router: Router, private notificationsService: NotificationsService) {
    
  }

  ngOnInit(){
    this.authService.user.subscribe(user => {
      if(user){
        this.router.navigateByUrl('/profile')
      }
      
    })
  }


  login() {
    this.authService.login(this.userEmail, this.userPassword)
    .then((res) => {
    })
    .catch(err => {
      if(err == 'auth/user-not-found' || err == 'auth/invalid-email'){
        this.notificationsService.openToast('Email incorrect', 'error')
      }else if(err == 'auth/wrong-password'){
        this.notificationsService.openToast('Password incorrect', 'error')
      }else if(err == 'auth/too-many-requests'){
        this.notificationsService.openToast('Too many attempts, please try again later', 'error')
      }
    })
  }
}
