import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MusicTerm } from '../models/music-term.model';

@Injectable()
export class MusicTermsService {

  public user: Observable<firebase.User>;
  private termListRef: AngularFireList<MusicTerm>;
  
  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = auth.authState;
    this.termListRef = this.db.list('/terms/');
      
  }

  public getAllMusicTerms(): Observable<MusicTerm[]> {

    return this.termListRef.valueChanges()

  }
  

}