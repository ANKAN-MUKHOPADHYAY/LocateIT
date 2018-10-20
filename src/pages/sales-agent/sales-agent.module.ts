import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesAgentPage } from './sales-agent';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
//import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    SalesAgentPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesAgentPage),
    HeaderModule,
    FooterModule,
    //InNewsModule
  ],
})
export class SalesAgentPageModule {}
