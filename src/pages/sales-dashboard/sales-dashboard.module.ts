import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesDashboardPage } from './sales-dashboard';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    SalesDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesDashboardPage),
    FooterModule,
    HeaderModule,
    InNewsModule
  ],
})
export class SalesDashboardPageModule {}
