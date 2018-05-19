var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstituteLandingPage } from './institute-landing';
import { InstOfferingModule } from '../../components/inst-offering/inst-offering.module';
import { InstituteComponentsModule } from '../../components/institute-components.module';
import { SimilarProfileModule } from '../../components/similar-profile/similar-profile.module';
import { RecommendedInstituteModule } from '../../components/recommended-institute/recommended-institute.module';
import { HeaderModule } from '../../components/header/header.module';
var InstituteLandingPageModule = /** @class */ (function () {
    function InstituteLandingPageModule() {
    }
    InstituteLandingPageModule = __decorate([
        NgModule({
            declarations: [
                InstituteLandingPage,
            ],
            imports: [
                IonicPageModule.forChild(InstituteLandingPage),
                InstituteComponentsModule,
                InstOfferingModule,
                SimilarProfileModule,
                RecommendedInstituteModule,
                HeaderModule,
            ],
        })
    ], InstituteLandingPageModule);
    return InstituteLandingPageModule;
}());
export { InstituteLandingPageModule };
//# sourceMappingURL=institute-landing.module.js.map