import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstituteLandingPage } from './institute-landing';

@NgModule({
  declarations: [
    InstituteLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(InstituteLandingPage),
  ],
})
export class InstituteLandingPageModule {}
