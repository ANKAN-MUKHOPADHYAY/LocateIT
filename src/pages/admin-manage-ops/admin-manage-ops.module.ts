import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminManageOpsPage } from './admin-manage-ops';

@NgModule({
  declarations: [
    AdminManageOpsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminManageOpsPage),
  ],
})
export class AdminManageOpsPageModule {}
