import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsConditionsPage } from './terms-conditions';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    TermsConditionsPage,
    
  ],
  imports: [
    IonicPageModule.forChild(TermsConditionsPage),
    HeaderModule,
    FooterModule,
    InNewsModule,
  ],
})
export class TermsConditionsPageModule {}
