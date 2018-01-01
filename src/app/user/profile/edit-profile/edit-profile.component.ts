import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { OVERLAY_PROVIDERS, ScrollStrategyOptions } from '@angular/cdk/overlay';


import * as firebase from 'firebase/app';
import { AuthService } from '../../../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { ConfirmCredentialsDialogComponent } from './confirm-credentials-dialog/confirm-credentials-dialog.component';
import { NotificationsService } from '../../../services/notifications.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
  providers: [MatDialog, ScrollStrategyOptions, OVERLAY_PROVIDERS]
})
export class EditProfileComponent implements OnInit {

  public user: firebase.User;
  public userEmail: string;
  
    constructor(private authService: AuthService, private router: Router, public dialog: MatDialog, public notifications: NotificationsService) {
      authService.user.subscribe(user => {
        if(user){
          this.user = user;
          this.userEmail = user.email;
        }
      })
    }

    openDialog(userForm: NgForm): void {
      if(userForm.valid){
        let dialogRef = this.dialog.open(ConfirmCredentialsDialogComponent, {
          width: '250px',
          data: { email: this.userEmail }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.notifications.openToast('Email successfully updated!', 'success')
        });
      }
    }

  ngOnInit() {
  }


}
