import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminManageOpsPage } from './admin-manage-ops';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    AdminManageOpsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminManageOpsPage),
    HeaderModule,
    FooterModule,
    InNewsModule
  ],
})
export class AdminManageOpsPageModule {}
