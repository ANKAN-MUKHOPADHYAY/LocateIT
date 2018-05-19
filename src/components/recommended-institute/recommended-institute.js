var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
var RecommendedInstituteComponent = /** @class */ (function () {
    function RecommendedInstituteComponent() {
        this.recommended = [{
                name: "ZoomCar",
                imgUrl: "https://image3.mouthshut.com/images/imagesp/925725994s.jpg",
                address: "Brigade Millenium, JP Nagar 5th phase",
                reviews: "30",
                students: ""
            }, {
                name: "Common Floor",
                imgUrl: "https://teja13.kuikr.com/is/p/f/800x600/images/new_home/commonfloor_logo.png",
                address: "Domlur,Bangalore",
                reviews: "90",
                students: ""
            }, {
                name: "CouponDunia",
                imgUrl: "data:image/png;base64,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",
                address: "Yellankha",
                reviews: "20",
                students: ""
            }];
    }
    RecommendedInstituteComponent = __decorate([
        Component({
            selector: 'recommended-institute',
            templateUrl: 'recommended-institute.html'
        }),
        __metadata("design:paramtypes", [])
    ], RecommendedInstituteComponent);
    return RecommendedInstituteComponent;
}());
export { RecommendedInstituteComponent };
//# sourceMappingURL=recommended-institute.js.map