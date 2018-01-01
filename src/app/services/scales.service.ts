import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList, AngularFireObject, AngularFireAction } from 'angularfire2/database/interfaces';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class ScalesService {

  public user: Observable<firebase.User>;
  private userScaleListsRef: AngularFireList<any>;
  
  constructor(private auth: AngularFireAuth, private db: AngularFireDatabase) {
    this.user = auth.authState;
   
  }

  public getUserScaleLists(uid: string): Observable<AngularFireAction<firebase.database.DataSnapshot>[]> {
    this.userScaleListsRef = this.db.list('/customScales/' + uid)

    return this.userScaleListsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  public deleteScaleList(uid: string, termId: string){
    this.db.list('/customScales/' + uid +'/' + termId).remove()
    
  }
  

}