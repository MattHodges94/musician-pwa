import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { MusicTerm } from '../../models/music-term.model';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';

@Component({
  selector: 'app-add-terms',
  templateUrl: './add-terms.component.html',
  styleUrls: ['./add-terms.component.scss']
})
export class AddTermsComponent implements OnInit {

  private newTerm = new MusicTerm()
  private newTermRef: AngularFireList<MusicTerm>


  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
   this.newTermRef = this.db.list('/terms/');
  }

  onSubmit(termForm: NgForm) { 
    if(termForm.valid){
      this.newTermRef.push( this.newTerm );
    }
  }


}
