import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MetronomeComponent } from './metronome/metronome.component';

const routes: Routes = [
  {path: '', component: MetronomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MetronomeRoutingModule { }
