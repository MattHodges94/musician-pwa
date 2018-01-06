import { Component, OnInit, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';

import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userEmailRegister: string;
  userPasswordRegister: string;


  constructor(public authService: AuthService, private router: Router) {
    
  }

  ngOnInit(){
    this.authService.user.subscribe(user => {
      if(user){
        this.router.navigateByUrl('/profile')
      }
    })
  }

  signup() {
    this.authService.signup(this.userEmailRegister, this.userPasswordRegister);
  }

}
