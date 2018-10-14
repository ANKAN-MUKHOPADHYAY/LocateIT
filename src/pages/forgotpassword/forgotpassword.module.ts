import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgotpasswordPage } from './forgotpassword';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';
@NgModule({
  declarations: [
    ForgotpasswordPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgotpasswordPage),
    HeaderModule,
    FooterModule,
    InNewsModule
  ],
})
export class ForgotpasswordPageModule {}
