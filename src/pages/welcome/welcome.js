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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/*import { AlertController } from 'ionic-angular';*/
import { HttpServiceProvider } from '../../providers/http-service/http-service';
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams, restService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        console.log(this.navCtrl);
    }
    WelcomePage.prototype.getCourses = function (ev) {
        var _this = this;
        console.log(ev);
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.restService.get('/search/searchcourses/' + val).then(function (data) {
            if (data.status) {
                _this.currentItems = data.response;
                console.log(_this.currentItems);
            }
        });
    };
    WelcomePage.prototype.locationSearch = function () {
        this.navCtrl.push('SelectLocationPage');
    };
    WelcomePage.prototype.openItem = function (item) {
        this.navCtrl.push('SelectLocationPage', {
            selectedCourse: item
        });
    };
    WelcomePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-welcome',
            templateUrl: 'welcome.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider])
    ], WelcomePage);
    return WelcomePage;
}());
export { WelcomePage };
//# sourceMappingURL=welcome.js.map