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
import { GlobalProvider } from '../../providers/global/global';
import { ViewController, NavController } from 'ionic-angular';
var InstOfferingComponent = /** @class */ (function () {
    function InstOfferingComponent(_global, view, navCtrl) {
        this._global = _global;
        this.view = view;
        this.navCtrl = navCtrl;
        //console.log(this._global.dashboardActiveComponent);
        this._global.dashboardActiveComponent = this._global.dashboardActiveComponent;
    }
    InstOfferingComponent.prototype.showActiveComponent = function (active, i) {
        //console.log('mode in showActiveComponent'+this._global.mode);
        //console.log(this._global.offlineComponents.indexOf(active));
        console.log(active);
        var iCard = document.getElementById(active);
        var iContent = document.getElementById('scroll_content');
        //var contentBounding = iContent.getBoundingClientRect();
        //var cardBounding = iCard.getBoundingClientRect();
        // var leftScroll=parseInt(cardBounding.width.toString());
        // var rightScroll=parseInt(cardBounding.right.toString())-parseInt(contentBounding.right.toString())+(i-1.5)*parseInt(cardBounding.width.toString());
        // if(cardBounding.left<contentBounding.left){
        //   this.scroll._scrollContent.nativeElement.scrollLeft-=leftScroll;
        // }
        // if(cardBounding.right>contentBounding.right){
        //   this.scroll._scrollContent.nativeElement.scrollLeft = rightScroll;
        // }
        this._global.tempDashboardActiveComponent = active;
        this._global.dashboardActiveComponent = active;
        // if(this.view.name!="HomePage"){
        //       //this.navCtrl.popAll();
        //       this.navCtrl.push('HomePage');
        //     }
        //     //If Navigate is clicked then load default profile
        //     if(this._global.dashboardActiveComponent == 'navigate'){
        //       this._filterService.getDefaultProfile();
        //     }
        //   }
    };
    InstOfferingComponent = __decorate([
        Component({
            selector: 'inst-offering',
            templateUrl: 'inst-offering.html'
        }),
        __metadata("design:paramtypes", [GlobalProvider, ViewController, NavController])
    ], InstOfferingComponent);
    return InstOfferingComponent;
}());
export { InstOfferingComponent };
//# sourceMappingURL=inst-offering.js.map