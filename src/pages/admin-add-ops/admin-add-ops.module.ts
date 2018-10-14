import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminAddOpsPage } from './admin-add-ops';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    AdminAddOpsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminAddOpsPage),
    HeaderModule,
    FooterModule,
    InNewsModule
  ],
})
export class AdminAddOpsPageModule {}
