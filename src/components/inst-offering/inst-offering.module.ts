import { NgModule,Renderer2} from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { InstOfferingComponent } from './inst-offering';
import { ReadMoreModule } from '../read-more/read-more.module';

@NgModule({
  declarations: [InstOfferingComponent],
  imports: [IonicModule,ReadMoreModule],
  exports: [InstOfferingComponent],

})
export class InstOfferingModule {

}
