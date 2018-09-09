import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UseraccountPage } from './useraccount';
import { HeaderModule } from '../../components/header/header.module';


@NgModule({
  declarations: [
    UseraccountPage,
  ],
  imports: [
    IonicPageModule.forChild(UseraccountPage),
    HeaderModule,

  ],
})
export class UseraccountPageModule {}
