import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';

import { AppShellComponent } from './app-shell/app-shell.component';
import { MusicTermsModule } from './music-terms/music-terms.module';
import { MetronomeModule } from './metronome/metronome.module';
import { ScaleGeneratorModule } from './scale-generator/scale-generator.module';

//Angular Fire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from '../environments/firebase.config'

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MusicTermsModule,
    MetronomeModule,
    ScaleGeneratorModule,
    //Firebase imports
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
