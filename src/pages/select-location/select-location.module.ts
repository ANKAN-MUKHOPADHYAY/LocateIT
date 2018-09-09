import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLocationPage } from './select-location';
import { HeaderModule } from '../../components/header/header.module';
import { FooterModule } from '../../components/footer/footer.module';
import { InNewsModule } from '../../components/in-news/in-news.module';

@NgModule({
  declarations: [
    SelectLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectLocationPage),
    HeaderModule,
    FooterModule,
    InNewsModule
  ],
})
export class SelectLocationPageModule {}
