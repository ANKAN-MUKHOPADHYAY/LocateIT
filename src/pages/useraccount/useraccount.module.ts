import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UseraccountPage } from './useraccount';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';


@NgModule({
  declarations: [
    UseraccountPage,
  ],
  imports: [
    IonicPageModule.forChild(UseraccountPage),
    HeaderModule,
    FooterModule,
    InNewsModule

  ],
})
export class UseraccountPageModule {}
