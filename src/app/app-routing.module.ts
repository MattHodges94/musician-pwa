import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MusicTermsComponent } from './music-terms/music-terms/music-terms.component';
import { MetronomeModule } from './metronome/metronome.module';
import { ScaleGeneratorModule } from './scale-generator/scale-generator.module';


const routes = [
  {path: 'music-index', component: MusicTermsComponent},
  {path: 'metronome', loadChildren: './metronome/metronome.module#MetronomeModule'},
  {path: 'scales', loadChildren: './scale-generator/scale-generator.module#ScaleGeneratorModule'},
  {path: '**', redirectTo: '/music-index'}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}

