import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScaleGeneratorRoutingModule } from './scale-generator-routing.module';
import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';

@NgModule({
  imports: [
    CommonModule,
    ScaleGeneratorRoutingModule
  ],
  declarations: [ScaleGeneratorComponent]
})
export class ScaleGeneratorModule { }
