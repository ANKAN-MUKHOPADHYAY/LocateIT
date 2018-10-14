import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OptionSignupPage } from './option-signup';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';


@NgModule({
  declarations: [
    OptionSignupPage,
  ],
  imports: [
    IonicPageModule.forChild(OptionSignupPage),
    HeaderModule,
    FooterModule,
    InNewsModule
  ],
})
export class OptionSignupPageModule {}
