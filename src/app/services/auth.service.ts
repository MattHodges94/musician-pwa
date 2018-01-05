import { Injectable } from '@angular/core';
import { Router } from '@angular/router'

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

import { NotificationsService } from '../services/notifications.service';
import { promise } from 'selenium-webdriver';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  
    constructor(private auth: AngularFireAuth, private router: Router, private notifications: NotificationsService) {
      this.user = auth.authState;
      
    }
  
    signup(email: string, password: string) {
      this.auth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          let user:any = firebase.auth().currentUser;
          user.sendEmailVerification().then(
            (success) => {
              this.notifications.openToast('Please check your email to verify your account', 'success')
            } 
          ).catch(
            (err) => {
              console.log(err)
            }
          )

        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        });    
    }
  
    login(email: string, password: string): any {
      return this.auth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          this.notifications.openToast('Login successful', 'success')
        })
        .catch(err => {
          console.log(err)
          return Promise.reject(err.code)
        });
    }
  
    logout() {
      this.auth
        .auth
        .signOut()
        .then( value => {
          console.log('logout')
          this.router.navigateByUrl('/login')
        })
    }

    sendPasswordReset(email: string){
      this.auth.auth.sendPasswordResetEmail(email)
    }

}
