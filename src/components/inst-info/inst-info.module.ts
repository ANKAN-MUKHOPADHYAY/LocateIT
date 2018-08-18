import { NgModule,Renderer2} from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { InstInfoComponent } from './inst-info';
import { ReadMoreModule } from '../read-more/read-more.module';

@NgModule({
  declarations: [
    InstInfoComponent
  ],
  imports: [
    IonicModule,ReadMoreModule,
  ],
  exports: [
    InstInfoComponent
  ],

})

export class InstInfoModule { }
