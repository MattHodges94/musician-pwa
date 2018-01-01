import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
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
  public submitted: boolean = false;


  constructor(private router: Router, private db: AngularFireDatabase, private authService: AuthService, private notifications: NotificationsService) {
    authService.user.subscribe(user => {
      if(user){
        this.user = user;
        this.newTermRef = this.db.list('/customTerms/' + this.user.uid);
      }else{
        this.router.navigateByUrl('/')
      }
    })
  }

  ngOnInit() {
  }

  onSubmit(termForm: NgForm) { 
    console.log(termForm) 
    if(termForm.valid){
      this.newTermRef.push( this.newTerm )
        .then(value => {
          this.notifications.openToast('Term successfully added!', 'success')
        })
        this.submitted = false;
      termForm.reset()
    }else{
      this.submitted = true;
    }
  }
}
