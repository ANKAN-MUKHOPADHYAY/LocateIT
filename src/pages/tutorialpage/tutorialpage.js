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
import { HttpServiceProvider } from '../../providers/http-service/http-service';
/**
 * Generated class for the TutorialpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TutorialpagePage = /** @class */ (function () {
    function TutorialpagePage(navCtrl, navParams, _restservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._restservice = _restservice;
    }
    TutorialpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TutorialpagePage');
    };
    TutorialpagePage.prototype.gotoWelcome = function () {
        this.navCtrl.push('WelcomePage');
    };
    TutorialpagePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tutorialpage',
            templateUrl: 'tutorialpage.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider])
    ], TutorialpagePage);
    return TutorialpagePage;
}());
export { TutorialpagePage };
//# sourceMappingURL=tutorialpage.js.map