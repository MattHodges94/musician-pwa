import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing/app-routing.module";

import { AppComponent } from './app.component';

import { AppShellComponent } from './app-shell/app-shell.component';
import { MusicTermsComponent } from './music-terms/music-terms.component';
import { MetronomeComponent } from './metronome/metronome.component';
import { ScaleGeneratorComponent } from './scale-generator/scale-generator.component';

//Angular Fire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
  apiKey: "AIzaSyD-VOQXjzqrx4jxCX9p79cNIyQthdCLJy8",
  authDomain: "music-web-app-47bca.firebaseapp.com",
  databaseURL: "https://music-web-app-47bca.firebaseio.com",
  projectId: "music-web-app-47bca",
  messagingSenderId: "296130970811"
};

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
    MusicTermsComponent,
    MetronomeComponent,
    ScaleGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Firebase imports
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
