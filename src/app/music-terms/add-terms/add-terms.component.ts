import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { MusicTerm } from '../../models/music-term.model';
import { NotificationsService } from '../../services/notifications.service'

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-terms',
  templateUrl: './add-terms.component.html',
  styleUrls: ['./add-terms.component.scss']
})
export class AddTermsComponent implements OnInit {

  public newTerm = new MusicTerm();
  public user: firebase.User;
  private newTermRef: AngularFireList<MusicTerm>;


  constructor(private db: AngularFireDatabase, private authService: AuthService, private notifications: NotificationsService) {
    authService.user.subscribe(user => {
      if(user){
        this.user = user;
        this.newTermRef = this.db.list('/customTerms/' + this.user.uid);
      }
    })
  }

  ngOnInit() {
  }

  onSubmit(termForm: NgForm) { 
    this.notifications.openToast('Term successfully added!', 'success')

    
    // if(termForm.valid){
    //   this.newTermRef.push( this.newTerm )
    //     .then(value => {
    //       this.notifications.openToast('Term successfully added!', 'success')
    //     })
    //   termForm.reset()
    // }
  }


}
