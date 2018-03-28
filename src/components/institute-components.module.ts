import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { InstInfoComponent } from './inst-info/inst-info';
import { InstCourseComponent } from './inst-course/inst-course';
import { InstLocationComponent } from './inst-location/inst-location';
import { InstReviewComponent } from './inst-review/inst-review';

@NgModule({
	declarations: [
    InstInfoComponent,
    InstCourseComponent,
    InstLocationComponent,
    InstReviewComponent
    // BookmarksComponent,
    // OfflineComponent
],
	imports: [IonicModule],
	exports: [
    InstInfoComponent,
    InstCourseComponent,
    InstLocationComponent,
    InstReviewComponent
    // BookmarksComponent,
    // OfflineComponent
]
})
export class InstituteComponentsModule {}
