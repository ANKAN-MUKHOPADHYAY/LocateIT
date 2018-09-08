import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionSignupPage } from './option-signup';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    OptionSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionSignupPage),
    HeaderModule
  ],
})
export class OptionSignupPageModule {}
