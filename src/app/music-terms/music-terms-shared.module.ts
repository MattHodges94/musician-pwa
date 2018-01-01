import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddTermsComponent } from '../music-terms/add-terms/add-terms.component';
import { EditTermsComponent } from '../music-terms/edit-terms/edit-terms.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AddTermsComponent,
    EditTermsComponent
  ],
  exports: [
    AddTermsComponent, 
    EditTermsComponent
  ]
})
export class MusicTermsSharedModule { }
