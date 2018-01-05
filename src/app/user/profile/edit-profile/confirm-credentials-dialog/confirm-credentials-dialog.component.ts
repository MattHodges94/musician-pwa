import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { AuthService } from '../../../../services/auth.service';

import * as firebase from 'firebase/app';
import { NotificationsService } from '../../../../services/notifications.service';

@Component({
  selector: 'app-confirm-credentials-dialog',
  templateUrl: './confirm-credentials-dialog.component.html',
  styleUrls: ['./confirm-credentials-dialog.component.scss']
})
export class ConfirmCredentialsDialogComponent  {

  public password: string = '';
  private user: firebase.User;
  private credentials: firebase.auth.EmailAuthProvider;

  constructor(
    public dialogRef: MatDialogRef<ConfirmCredentialsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private notificationsService: NotificationsService) {
      authService.user.subscribe(user => {
        this.user = user;
      })
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
 
  reAuthenticate(): void {
    this.credentials = firebase.auth.EmailAuthProvider.credential(
      this.user.email,
      this.password
    );
    this.user.reauthenticateWithCredential(this.credentials)
      .then(_ => {
        this.user.updateEmail(this.data.email)
        this.dialogRef.close('success')
      })
      .catch(error => {
        this.notificationsService.openToast('Password incorrect', 'error')
      })
  }

}
