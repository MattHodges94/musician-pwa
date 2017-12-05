import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';

const routes: Routes = [
  {path: '', component: ScaleGeneratorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScaleGeneratorRoutingModule { }
