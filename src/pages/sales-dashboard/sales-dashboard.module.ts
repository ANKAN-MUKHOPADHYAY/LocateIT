import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalesDashboardPage } from './sales-dashboard';

@NgModule({
  declarations: [
    SalesDashboardPage,
  ],
  imports: [
    IonicPageModule.forChild(SalesDashboardPage),
  ],
})
export class SalesDashboardPageModule {}
