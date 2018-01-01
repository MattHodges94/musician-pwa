import { Component, OnInit } from '@angular/core';

import { MusicTermsService } from '../../services/music-terms.service'
import { MusicTerm } from '../../models/music-term.model';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import * as firebase from 'firebase/app';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-terms',
  templateUrl: './search-terms.component.html',
  styleUrls: ['./search-terms.component.scss']
})
export class SearchTermsComponent implements OnInit {

  public termList: any[] = []
  private termListMap: Map<any, boolean> = new Map;

  constructor(private db: AngularFireDatabase, private musicTermsService: MusicTermsService, private authService: AuthService) { }

  ngOnInit() {
    this.musicTermsService.getAllMusicTerms()
      .subscribe(terms => {
        this.termList = terms;
        terms.forEach(term => {
          this.termListMap.set(term, false);
        })
    })
    
    this.authService.user.subscribe(user => {
      if(user){
        this.musicTermsService.getUserTerms(user.uid)
        .subscribe(terms => {
          terms.forEach(term => {
            this.termList.push(term)
            this.termListMap.set(term, false);
          })
        })
      }
    })
    
  }

  public search(searchTerm: string){
    this.termList.filter(term => {
      if(searchTerm != '' && term.name.toLowerCase().includes(searchTerm.toLowerCase())){
        this.termListMap.set(term, true)
      } else {
        this.termListMap.set(term, false)
      }
    })
  }

}
