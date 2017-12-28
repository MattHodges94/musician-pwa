import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  
    constructor(private auth: AngularFireAuth) {
      this.user = auth.authState;
      
    }
  
    signup(email: string, password: string) {
      this.auth
        .auth
        .createUserWithEmailAndPassword(email, password)
        .then(value => {
          let user:any = firebase.auth().currentUser;
          user.sendEmailVerification().then(
            (success) => {console.log("please verify your email")} 
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
  
    login(email: string, password: string) {
      this.auth
        .auth
        .signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
        })
        .catch(err => {
          console.log('Something went wrong:',err.message);
        });
    }
  
    logout() {
      this.auth
        .auth
        .signOut()
        .then( value => {
          
        })
        .catch( err => {
          console.log(err.message)
        })
    }

    sendPasswordReset(email: string){
      this.auth.auth.sendPasswordResetEmail(email)
    }

}
