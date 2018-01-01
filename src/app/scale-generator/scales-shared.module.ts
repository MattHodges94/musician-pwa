import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddScaleListComponent } from './add-scale-list/add-scale-list.component';
import { EditScalesComponent } from './edit-scales/edit-scales.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AddScaleListComponent,
    EditScalesComponent
  ],
  exports: [
    AddScaleListComponent, 
    EditScalesComponent
  ]
})
export class ScalesSharedModule { }