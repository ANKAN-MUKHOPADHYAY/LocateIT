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
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
var InstLocationComponent = /** @class */ (function () {
    function InstLocationComponent(navCtrl, navParams, _restservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._restservice = _restservice;
        this.showDesc = [];
        //console.log('Hello InstLocationComponent Component');
        this.showDesc.push(false);
        //console.log(this.locations);
        this.institutePrefferedLocation();
        this.navParamType = typeof (this.navParams.data);
    }
    InstLocationComponent.prototype.showDescription = function (index, button) {
        this.showDesc[index] = button;
    };
    InstLocationComponent.prototype.institutePrefferedLocation = function () {
        if (this.navParamType === Number) {
            this.restUrl = '/institute/getInstituteInformation/' + this.navParams.data;
        }
        else {
            this.restUrl = '/institute/getInstituteInformation/' + sessionStorage.getItem('instlooking');
        }
        this.getData();
    };
    InstLocationComponent.prototype.getData = function () {
        var _this = this;
        this._restservice.get(this.restUrl).then(function (res) {
            _this.locations = res.response[0].location;
            //console.log(this.instituteInfos);
        });
    };
    InstLocationComponent = __decorate([
        Component({
            selector: 'inst-location',
            templateUrl: 'inst-location.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams, HttpServiceProvider])
    ], InstLocationComponent);
    return InstLocationComponent;
}());
export { InstLocationComponent };
//# sourceMappingURL=inst-location.js.map