import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddTermsComponent } from '../music-terms/add-terms/add-terms.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AddTermsComponent
  ],
  exports: [
    AddTermsComponent
  ]
})
export class MusicTermsSharedModule { }
