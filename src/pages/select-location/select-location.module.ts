import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLocationPage } from './select-location';
import { HeaderModule } from '../../components/header/header.module';

@NgModule({
  declarations: [
    SelectLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectLocationPage),
    HeaderModule,
  ],
})
export class SelectLocationPageModule {}
