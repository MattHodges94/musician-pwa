import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicTermsRoutingModule } from './music-terms-routing.module';
import { MusicTermsSharedModule } from '../music-terms/music-terms-shared.module';
import { SearchTermsComponent } from './search-terms/search-terms.component';
import { MusicTermsComponent } from './music-terms/music-terms.component';



@NgModule({
  imports: [
    CommonModule,
    MusicTermsRoutingModule,
    MusicTermsSharedModule
  ],
  declarations: [ 
    MusicTermsComponent, 
    SearchTermsComponent
  ]
})
export class MusicTermsModule { }
