import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiryhistoryPage } from './enquiryhistory';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    EnquiryhistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquiryhistoryPage),
    HeaderModule,
    FooterModule,
    InNewsModule,
  ],
})
export class EnquiryhistoryPageModule {}
