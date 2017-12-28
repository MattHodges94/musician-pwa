import { Component, OnInit, Inject } from '@angular/core';
import {MatSnackBar, MatSnackBarRef, MAT_SNACK_BAR_DATA} from '@angular/material';

@Inject({})
export class NotificationsService implements OnInit {

  constructor(public toast: MatSnackBar) { }

  ngOnInit() {
  }

  openToast(message, status){
    this.toast.open(message, null, {
        duration: 3000,
        panelClass: status
    });
  }

}