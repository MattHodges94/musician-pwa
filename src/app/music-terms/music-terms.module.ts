import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicTermsRoutingModule } from './music-terms-routing.module';
import { SearchTermsComponent } from './search-terms/search-terms.component';
import { AddTermsComponent } from './add-terms/add-terms.component';
import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';

@NgModule({
  imports: [
    CommonModule,
    MusicTermsRoutingModule
  ],
  declarations: [SearchTermsComponent, AddTermsComponent, ScaleGeneratorComponent]
})
export class MusicTermsModule { }
