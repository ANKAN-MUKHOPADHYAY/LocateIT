import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { PromtComponent } from './promt/promt';
@NgModule({
	declarations: [MessageComponent,
    PromtComponent],
	imports: [IonicModule],
	exports: [MessageComponent,
    PromtComponent]
})
export class ComponentsModule {}
