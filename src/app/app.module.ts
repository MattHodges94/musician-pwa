import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppShellComponent } from './app-shell/app-shell.component';
import { MusicTermsModule } from './music-terms/music-terms.module';
import { MetronomeModule } from './metronome/metronome.module';
import { ScaleGeneratorModule } from './scale-generator/scale-generator.module';
import { UserModule } from './user/user.module';
import { AuthService } from './auth.service';

//Angular Fire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config'

@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MusicTermsModule,
    MetronomeModule,
    ScaleGeneratorModule,
    UserModule,
    //Firebase imports
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
