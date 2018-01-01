import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule, MatDialogModule, MatSnackBarModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppShellComponent } from './app-shell/app-shell.component';
import { MusicTermsService } from './services/music-terms.service';
import { ScalesService } from './services/scales.service';
import { NotificationsService } from './services/notifications.service';
import { SidenavService } from './services/sidenav.service';
import { MusicTermsModule } from './music-terms/music-terms.module';
import { MusicTermsSharedModule } from './music-terms/music-terms-shared.module';
import { MetronomeModule } from './metronome/metronome.module';
import { ScaleGeneratorModule } from './scale-generator/scale-generator.module';
import { UserModule } from './user/user.module';
import { AuthService } from './services/auth.service';

//Angular Fire imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';



@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MusicTermsModule,
    MetronomeModule,
    ScaleGeneratorModule,
    UserModule,
    MusicTermsSharedModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    //Firebase imports
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, MusicTermsService, NotificationsService, ScalesService, SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
