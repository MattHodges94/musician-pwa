import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { NotificationsService } from '../../services/notifications.service'
import { ScalesService } from '../../services/scales.service'

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-edit-scales',
  templateUrl: './edit-scales.component.html',
  styleUrls: ['./edit-scales.component.scss']
})
export class EditScalesComponent implements OnInit {

  public user: firebase.User;
  public userScaleLists;


  constructor(private router: Router, private db: AngularFireDatabase, private authService: AuthService, private notifications: NotificationsService, private scalesService: ScalesService) {
    authService.user.subscribe(user => {
      if(user){
        this.user = user;
        this.scalesService.getUserScaleLists(this.user.uid)
        .subscribe(scales => {
            this.userScaleLists = scales;
        })
      }else{
        this.router.navigateByUrl('/')
      }
    })
  }

  ngOnInit() {
    
  }

  public deleteScaleList(termId: string){
      this.scalesService.deleteScaleList(this.user.uid, termId)
      .then(_ => {
        this.notifications.openToast('Scale list deleted', 'success')
    })
  }
}
