import { NgModule } from '@angular/core';
import { InstOfferingComponent } from './inst-offering/inst-offering';
import { InstInfoComponent } from './inst-info/inst-info';
import { InstCourseComponent } from './inst-course/inst-course';
import { InstLocationComponent } from './inst-location/inst-location';
import { InstReviewComponent } from './inst-review/inst-review';
@NgModule({
	declarations: [InstOfferingComponent,
    InstInfoComponent,
    InstCourseComponent,
    InstLocationComponent,
    InstReviewComponent],
	imports: [],
	exports: [InstOfferingComponent,
    InstInfoComponent,
    InstCourseComponent,
    InstLocationComponent,
    InstReviewComponent]
})
export class ComponentsModule {}
