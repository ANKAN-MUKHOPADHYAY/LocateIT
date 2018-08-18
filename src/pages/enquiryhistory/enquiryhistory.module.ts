import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EnquiryhistoryPage } from './enquiryhistory';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    EnquiryhistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(EnquiryhistoryPage),
    HeaderModule,
  ],
})
export class EnquiryhistoryPageModule {}
