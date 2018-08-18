import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    HeaderModule,
  ],
})
export class ProfilePageModule {
	fileToUpload: File = null;
}
