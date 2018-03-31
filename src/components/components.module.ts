import { NgModule } from '@angular/core';
import { InstOfferingComponent } from './inst-offering/inst-offering';
import { InstInfoComponent } from './inst-info/inst-info';
import { InstCourseComponent } from './inst-course/inst-course';
import { InstLocationComponent } from './inst-location/inst-location';
import { InstReviewComponent } from './inst-review/inst-review';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';


@NgModule({
	declarations: [InstOfferingComponent,
    InstInfoComponent,
    InstCourseComponent,
    InstLocationComponent,
    InstReviewComponent,
    HeaderComponent,
    FooterComponent,
  ],
	imports: [],
	exports: [InstOfferingComponent,
    InstInfoComponent,
    InstCourseComponent,
    InstLocationComponent,
    InstReviewComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class ComponentsModule {}
