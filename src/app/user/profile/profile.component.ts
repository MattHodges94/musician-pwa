import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import { AuthService } from '../../auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) {
   }

  private user = this.authService.user
  private userInfo: firebase.User

  ngOnInit() {
    this.user.subscribe(user => {
      this.userInfo = user 
      console.log(this.userInfo.uid)
    })
    console.log(this.user)
  }

}
