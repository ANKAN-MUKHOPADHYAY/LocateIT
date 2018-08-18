import { Component } from '@angular/core';
import { GlobalProvider } from '../../providers/global/global';
import { ViewController, NavController,Content, Scroll } from 'ionic-angular';



@Component({
  selector: 'inst-offering',
  templateUrl: 'inst-offering.html'
})
export class InstOfferingComponent {
  constructor(public _global:GlobalProvider,public view:ViewController, public navCtrl:NavController) {
    //console.log(this._global.dashboardActiveComponent);
    this._global.dashboardActiveComponent = this._global.dashboardActiveComponent;
  }

  showActiveComponent(active,i){
      //console.log('mode in showActiveComponent'+this._global.mode);
      //console.log(this._global.offlineComponents.indexOf(active));
      console.log(active);
      var iCard=document.getElementById(active);
      var iContent=document.getElementById('scroll_content');
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
      this._global.tempDashboardActiveComponent=active;
      this._global.dashboardActiveComponent=active;
      // if(this.view.name!="HomePage"){
      //       //this.navCtrl.popAll();
      //       this.navCtrl.push('HomePage');
      //     }
      //     //If Navigate is clicked then load default profile
      //     if(this._global.dashboardActiveComponent == 'navigate'){
      //       this._filterService.getDefaultProfile();
      //     }
      //   }
  }
}
