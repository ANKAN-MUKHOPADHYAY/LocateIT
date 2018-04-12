import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    MainPage,
  ],
  imports: [
    IonicPageModule.forChild(MainPage),
    HeaderModule,
  ],
})
export class MainPageModule {}
