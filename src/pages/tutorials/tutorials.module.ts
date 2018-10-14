import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorialsPage } from './tutorials';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    TutorialsPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorialsPage),
    HeaderModule,
    FooterModule,
    InNewsModule
  ],
})
export class TutorialsPageModule {}
