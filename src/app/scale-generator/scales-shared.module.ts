import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddScaleListComponent } from './add-scale-list/add-scale-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AddScaleListComponent
  ],
  exports: [
    AddScaleListComponent
  ]
})
export class ScalesSharedModule { }