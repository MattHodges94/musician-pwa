import { Component, OnInit, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material';
import { SidenavService } from '../services/sidenav.service'

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
  providers: [MatSidenav]
})
export class AppShellComponent implements OnInit {

  public isOpen: boolean = false;
  constructor(private sidenavService: SidenavService) { }

  ngOnInit() {

  }

  public toggleSidenav() {
    this.sidenavService
      .toggle()
      .then(() => { });
  }

}
