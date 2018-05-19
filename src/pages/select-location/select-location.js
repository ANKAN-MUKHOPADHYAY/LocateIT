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
 * Generated class for the SelectLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectLocationPage = /** @class */ (function () {
    function SelectLocationPage(navCtrl, navParams, restService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restService = restService;
        this.userdetail = { u_id: '', u_cid: '', u_lid: '' };
        console.log(this.navParams);
    }
    SelectLocationPage.prototype.getLocation = function (loc) {
        var _this = this;
        var val = loc.target.value;
        if (!val || !val.trim()) {
            this.locations = [];
            return;
        }
        this.restService.get('/search/searchlocations/' + val).then(function (data) {
            if (data.status) {
                _this.locations = data.response;
                console.log(_this.locations);
            }
        });
    };
    SelectLocationPage.prototype.openSignUp = function (loc) {
        var _this = this;
        if (sessionStorage.getItem('userid') == null || sessionStorage.getItem('userid') == undefined) {
            this.navCtrl.push('SignupPage', {
                selectedCourse: this.navParams.data.selectedCourse,
                selectedLocation: loc
            });
        }
        else {
            this.userdetail.u_cid = this.navParams.data.selectedCourse.id;
            this.userdetail.u_id = sessionStorage.getItem('userid');
            this.userdetail.u_lid = loc.id;
            this.restService.post('/user/userenquiry', JSON.stringify(this.userdetail)).then(function (resp) {
                console.log(resp);
                if (resp.status) {
                    sessionStorage.setItem('enquiry', resp.result.enquiry_id);
                    _this.navCtrl.push('MainPage');
                }
            });
        }
    };
    SelectLocationPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-select-location',
            templateUrl: 'select-location.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider])
    ], SelectLocationPage);
    return SelectLocationPage;
}());
export { SelectLocationPage };
//# sourceMappingURL=select-location.js.map