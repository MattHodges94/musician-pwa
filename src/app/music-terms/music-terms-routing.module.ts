import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddTermsComponent } from './add-terms/add-terms.component';
import { SearchTermsComponent } from './search-terms/search-terms.component';
import { MusicTermsComponent } from './music-terms/music-terms.component';

const routes: Routes = [
  {path: '', component: MusicTermsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicTermsRoutingModule { }
