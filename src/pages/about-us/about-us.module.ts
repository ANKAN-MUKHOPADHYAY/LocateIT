import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutUsPage } from './about-us';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    AboutUsPage,
    
  ],
  imports: [
    IonicPageModule.forChild(AboutUsPage),
    FooterModule,
    InNewsModule,
  ],
})
export class AboutUsPageModule {}
