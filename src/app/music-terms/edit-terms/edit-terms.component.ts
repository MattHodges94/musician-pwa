import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { MusicTerm } from '../../models/music-term.model';
import { NotificationsService } from '../../services/notifications.service'
import { MusicTermsService } from '../../services/music-terms.service'

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-edit-terms',
  templateUrl: './edit-terms.component.html',
  styleUrls: ['./edit-terms.scss']
})
export class EditTermsComponent implements OnInit {

  public newTerm = new MusicTerm();
  public user: firebase.User;
  public userTerms;


  constructor(private router: Router, private db: AngularFireDatabase, private authService: AuthService, private notifications: NotificationsService, private musicTermsService: MusicTermsService) {
    authService.user.subscribe(user => {
      if(user){
        this.user = user;
        this.musicTermsService.getUserTerms(this.user.uid)
        .subscribe(terms => {
            this.userTerms = terms;
        })
      }else{
        this.router.navigateByUrl('/')
      }
    })
  }

  ngOnInit() {
    
  }

  public deleteTerm(termId: string){
      this.musicTermsService.deleteTerm(this.user.uid, termId)
      .then(_ => {
          this.notifications.openToast('Term deleted', 'success')
      })
  }
}
