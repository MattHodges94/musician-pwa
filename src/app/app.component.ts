import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

import { SidenavService } from './services/sidenav.service';
import { AuthService } from './services/auth.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MatSidenav]
}) 
export class AppComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;
  public user: firebase.User;

  constructor(private sidenavService: SidenavService, public authService: AuthService){

    authService.user.subscribe(user => {
      this.user = user;
    })
  } 

  ngOnInit(){
    this.sidenavService
      .setSidenav(this.sidenav);
  }

  public toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }
 
}
