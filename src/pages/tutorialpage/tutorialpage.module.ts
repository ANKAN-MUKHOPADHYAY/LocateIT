import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorialpagePage } from './tutorialpage';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    TutorialpagePage,
  ],
  imports: [
    IonicPageModule.forChild(TutorialpagePage),
    HeaderModule,
    FooterModule,
    InNewsModule

  ],
})
export class TutorialpagePageModule {}
