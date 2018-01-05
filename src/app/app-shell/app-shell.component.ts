import { Component, OnInit, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav, MatMenuModule } from '@angular/material';
import { SidenavService } from '../services/sidenav.service'
import { AuthService } from '../services/auth.service';
import * as firebase from 'firebase'

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  providers: [MatSidenav]
})
export class AppShellComponent implements OnInit {

  public isOpen: boolean = false;
  public user: firebase.User;

  constructor(private sidenavService: SidenavService, public authService: AuthService) { }

  ngOnInit() {

    this.authService.user
    .subscribe(user => {
      this.user = user;
    })
  }

  public toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }

  public logout(){
    this.authService.logout()
  }

}
