import { Component, OnInit } from '@angular/core';

import { MusicTermsService } from '../../services/music-terms.service'
import { MusicTerm } from '../../models/music-term.model';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-terms',
  templateUrl: './search-terms.component.html',
  styleUrls: ['./search-terms.component.scss']
})
export class SearchTermsComponent implements OnInit {

  private termList: MusicTerm[];
  private termListMap: Map<MusicTerm, boolean> = new Map;

  constructor(private db: AngularFireDatabase, private musicTermsService: MusicTermsService) { }

  ngOnInit() {
    this.musicTermsService.getAllMusicTerms()
      .subscribe(terms => {
        this.termList = terms;
        terms.forEach(term => {
          this.termListMap.set(term, false);
        })
    })
  }

  private search(searchTerm: string){
    this.termList.filter(term => {
      if(searchTerm != '' && term.name.includes(searchTerm)){
        this.termListMap.set(term, true)
      } else {
        this.termListMap.set(term, false)
      }
    })
  }

}
