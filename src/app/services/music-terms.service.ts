import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, AngularFireObject, AngularFireAction } from 'angularfire2/database/interfaces';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MusicTerm } from '../models/music-term.model';

@Injectable()
export class MusicTermsService {

  public user: Observable<firebase.User>;
  private termListRef: AngularFireList<MusicTerm>;
  private userTermListRef: AngularFireList<MusicTerm>;
  
  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = auth.authState;
    this.termListRef = this.db.list('/terms/');
   
  }

  public getAllMusicTerms(): Observable<MusicTerm[]> {
    return this.termListRef.valueChanges()
  }

  public getUserTerms(uid: string): Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    this.userTermListRef = this.db.list('/customTerms/' + uid)

    //not updating when something is removed from firbaase????
    return this.userTermListRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  public deleteTerm(uid: string, termId: string){
    return this.db.list('/customTerms/' + uid +'/' + termId).remove()
    
  }
  

}