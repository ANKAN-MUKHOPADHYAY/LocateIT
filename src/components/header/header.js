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
import { NavController, ViewController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(navCtrl, viewCtrl, _restservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this._restservice = _restservice;
        if (sessionStorage.getItem('userid') != undefined || sessionStorage.getItem('userid') != null) {
            this._restservice.get('/user/userinfo/' + sessionStorage.getItem('userid')).then(function (resp) {
                console.log(resp);
                _this.userinfo = resp.result;
                _this.loggedIn = true;
            });
        }
        else {
            this.loggedIn = false;
        }
    }
    HeaderComponent.prototype.gotoLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    HeaderComponent.prototype.gotoSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    HeaderComponent.prototype.logout = function () {
        this.navCtrl.push('LoginPage');
    };
    HeaderComponent.prototype.gotoProfile = function () {
        this.navCtrl.push('ProfilePage');
    };
    HeaderComponent.prototype.gotoAccount = function (ev) {
        //alert('WOW');
        console.log(ev);
        if (ev == "Logout") {
            sessionStorage.clear();
            this.navCtrl.push('WelcomePage');
        }
        else if (ev == "My Enquiry") {
            this.navCtrl.push('EnquiryhistoryPage');
        }
        else {
            this.navCtrl.push('UseraccountPage');
        }
    };
    HeaderComponent = __decorate([
        Component({
            selector: 'header',
            templateUrl: 'header.html'
        }),
        __metadata("design:paramtypes", [NavController, ViewController, HttpServiceProvider])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.js.map