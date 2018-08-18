var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { constantJson } from '../../constants';
import { AlertController } from 'ionic-angular';
/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpServiceProvider = /** @class */ (function () {
    //private customError : Array<string>; 
    function HttpServiceProvider(http, loader, alertCtrl) {
        this.http = http;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.loading = null;
        this.apiUrl = constantJson["serverUrl"] + constantJson["apiUrl"];
    }
    HttpServiceProvider.prototype.getService = function (url, showLoader) {
        var _this = this;
        if (showLoader === void 0) { showLoader = true; }
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response;
        })
            .catch(function (error) {
            if (_this) {
                _this.hideLoaderFunc();
            }
            _this.status = error.error.status;
            return Promise.reject(_this.status);
        });
    };
    HttpServiceProvider.prototype.get = function (url, showLoader) {
        var _this = this;
        if (showLoader === void 0) { showLoader = true; }
        this.showLoaderFunc(showLoader);
        var apiUrl = this.apiUrl + url;
        return this.http.get(apiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.hideLoaderFunc();
            return response;
        })
            .catch(function (error) {
            if (_this) {
                _this.hideLoaderFunc();
            }
            _this.status = error.error.status;
            return Promise.reject(_this.status);
        });
    };
    HttpServiceProvider.prototype.post = function (url, reqBody, showLoader) {
        var _this = this;
        if (showLoader === void 0) { showLoader = true; }
        this.showLoaderFunc(showLoader);
        var apiUrl = this.apiUrl + url;
        return this.http.post(apiUrl, reqBody, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.hideLoaderFunc();
            return response;
        })
            .catch(function (error) {
            if (_this) {
                _this.hideLoaderFunc();
            }
            _this.status = error.error.status;
            return Promise.reject(_this.status);
        });
    };
    HttpServiceProvider.prototype.delete = function (url, showLoader) {
        var _this = this;
        if (showLoader === void 0) { showLoader = true; }
        this.showLoaderFunc(showLoader);
        var apiUrl = this.apiUrl + url;
        return this.http.delete(apiUrl, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.hideLoaderFunc();
            return response;
        })
            .catch(function (error) {
            if (_this) {
                _this.hideLoaderFunc();
            }
            _this.status = error.error.status;
            return Promise.reject(_this.status);
        });
    };
    HttpServiceProvider.prototype.put = function (url, reqBody, showLoader) {
        var _this = this;
        if (showLoader === void 0) { showLoader = true; }
        this.showLoaderFunc(showLoader);
        var apiUrl = this.apiUrl + url;
        return this.http.put(apiUrl, reqBody, { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.hideLoaderFunc();
            return response;
        })
            .catch(function (error) {
            if (_this) {
                _this.hideLoaderFunc();
            }
            _this.status = error.error.status;
            return Promise.reject(_this.status);
        });
    };
    HttpServiceProvider.prototype.showLoaderFunc = function (showLoader) {
        var _this = this;
        if (showLoader && this.loading == null) {
            this.loading = this.loader.create({
                content: 'Please wait. We are loading ...'
            });
            this.loading.present();
            setTimeout(function () {
                if (_this.loading) {
                    _this.loading.dismiss();
                    _this.loading = null;
                }
            }, 20000);
        }
    };
    HttpServiceProvider.prototype.hideLoaderFunc = function () {
        if (this.loading) {
            this.loading.dismiss();
            this.loading = null;
        }
    };
    HttpServiceProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient, LoadingController, AlertController])
    ], HttpServiceProvider);
    return HttpServiceProvider;
}());
export { HttpServiceProvider };
//# sourceMappingURL=http-service.js.map