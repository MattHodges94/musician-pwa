import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material';


import { ScaleGeneratorRoutingModule } from './scale-generator-routing.module';
import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ScaleGeneratorRoutingModule,
    MatTabsModule,
    FormsModule
  ],
  declarations: [ScaleGeneratorComponent]
})
export class ScaleGeneratorModule { }
