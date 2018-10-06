import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesAgentPage } from './sales-agent';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [
    SalesAgentPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesAgentPage),
    HeaderModule,
    FooterModule,
  ],
})
export class SalesAgentPageModule {}
