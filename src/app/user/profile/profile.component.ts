import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: firebase.User;

  constructor(private authService: AuthService, private router: Router) {
    authService.user.subscribe(user => {
      this.user = user;
      if(!user){
        this.router.navigateByUrl('/login')
      }
    })
  }

  ngOnInit() {
    
  }

}
