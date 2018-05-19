var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { InstOfferingComponent } from './inst-offering/inst-offering';
import { InstInfoComponent } from './inst-info/inst-info';
import { InstCourseComponent } from './inst-course/inst-course';
import { InstLocationComponent } from './inst-location/inst-location';
import { InstReviewComponent } from './inst-review/inst-review';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        NgModule({
            declarations: [InstOfferingComponent,
                InstInfoComponent,
                InstCourseComponent,
                InstLocationComponent,
                InstReviewComponent,
            ],
            imports: [],
            exports: [InstOfferingComponent,
                InstInfoComponent,
                InstCourseComponent,
                InstLocationComponent,
                InstReviewComponent,
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map