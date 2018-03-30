import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstituteLandingPage } from './institute-landing';
import { InstOfferingModule } from '../../components/inst-offering/inst-offering.module';
import { InstituteComponentsModule } from '../../components/institute-components.module';
import { SimilarProfileModule } from '../../components/similar-profile/similar-profile.module';

@NgModule({
  declarations: [
    InstituteLandingPage,
  ],
  imports: [
    IonicPageModule.forChild(InstituteLandingPage),
    InstituteComponentsModule,
    InstOfferingModule,
    SimilarProfileModule,
  ],
})
export class InstituteLandingPageModule {}
