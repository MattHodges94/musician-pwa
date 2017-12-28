import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { MusicTermsSharedModule } from '../music-terms/music-terms-shared.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';
import { ScalesSharedModule } from '../scale-generator/scales-shared.module';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ConfirmCredentialsDialogComponent } from './profile/edit-profile/confirm-credentials-dialog/confirm-credentials-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    MusicTermsSharedModule,
    ScalesSharedModule,
    FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent, ProfileComponent, EditProfileComponent, ConfirmCredentialsDialogComponent],
  entryComponents: [ConfirmCredentialsDialogComponent]
})
export class UserModule { }
