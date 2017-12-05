import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { MusicTermsComponent } from '../music-terms/music-terms.component';
import { MetronomeComponent } from '../metronome/metronome.component';
import { ScaleGeneratorComponent } from '../scale-generator/scale-generator.component';


const routes = [
  {path: 'music-index', component: MusicTermsComponent},
  {path: 'metronome', component: MetronomeComponent},
  {path: 'scales', component: ScaleGeneratorComponent},
  {path: '**', redirectTo: '/music-index'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}

