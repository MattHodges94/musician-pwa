import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetronomeRoutingModule } from './metronome-routing.module';
import { MetronomeComponent } from './metronome/metronome.component';

@NgModule({
  imports: [
    CommonModule,
    MetronomeRoutingModule
  ],
  declarations: [MetronomeComponent]
})
export class MetronomeModule { }
