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
var SimilarProfileComponent = /** @class */ (function () {
    function SimilarProfileComponent() {
        this.similarProfiles = [{
                id: "1",
                imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/1953912-medium190ap.jpg",
                name: "TechNinzaz",
            }, {
                id: "2",
                imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/3575964-medium130ap.png",
                name: "BitzDoor Software",
            }, {
                id: "3",
                imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/178486-medium130ap.jpg",
                name: "object",
            }, {
                id: "4",
                imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/3136495-medium130ap.png",
                name: "Expert Lab",
            }, {
                id: "5",
                imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/2110978-medium130ap.png",
                name: "encryption",
            }, {
                id: "6",
                imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/224144-medium130ap.png",
                name: "iStepUp",
            }, {
                id: "7",
                imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/3712261-medium130ap.jpg",
                name: "Edge Pro",
            }, {
                id: "8",
                imgUrl: "https://s3-ap-southeast-1.amazonaws.com/tv-prod/member/photo/4122013-medium130ap.png",
                name: "Techno growth",
            }];
        //console.log('Hello SimilarProfileComponent Component');
        //console.log(this.similarProfiles);
    }
    SimilarProfileComponent = __decorate([
        Component({
            selector: 'similar-profile',
            templateUrl: 'similar-profile.html'
        }),
        __metadata("design:paramtypes", [])
    ], SimilarProfileComponent);
    return SimilarProfileComponent;
}());
export { SimilarProfileComponent };
//# sourceMappingURL=similar-profile.js.map