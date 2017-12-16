import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-music-terms',
  templateUrl: './music-terms.component.html',
  styleUrls: ['./music-terms.component.scss']
})
export class MusicTermsComponent implements OnInit {


  user: firebase.User;

  constructor(private authService: AuthService) { 
    authService.user.subscribe(user => {
      this.user = user;
    })
  }

  ngOnInit() {
  }

}
