import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MusicTermsRoutingModule } from './music-terms-routing.module';
import { AddTermsComponent } from './add-terms/add-terms.component';
import { SearchTermsComponent } from './search-terms/search-terms.component';
import { MusicTermsComponent } from './music-terms/music-terms.component';


@NgModule({
  imports: [
    CommonModule,
    MusicTermsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddTermsComponent, MusicTermsComponent, MusicTermsComponent, SearchTermsComponent]
})
export class MusicTermsModule { }
