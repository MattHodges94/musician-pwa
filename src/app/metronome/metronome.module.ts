import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MetronomeRoutingModule } from './metronome-routing.module';
import { MetronomeComponent } from './metronome/metronome.component';
import { HeaderModule } from '../header/header.module'

@NgModule({
  imports: [
    CommonModule,
    MetronomeRoutingModule,
    HeaderModule
  ],
  declarations: [MetronomeComponent]
})
export class MetronomeModule { }
