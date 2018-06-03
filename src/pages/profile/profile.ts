import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { ModalPage } from '../modal/modal';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
   selector: 'page-profile',
   templateUrl: 'profile.html',
 })

 export class ProfilePage {
   fileToUpload: File = null;
   info : string = "Personal";

   public userproinfo : any = [];


   constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams,public _restService: HttpServiceProvider) {
   }

    ionViewDidLoad() {
     console.log('ionViewDidLoad ProfilePage');

     //this.userproinfo = {"status":true,"result":{"user_id":79,"user_first_name":"ALOO","user_last_name":"GOBI","user_mobile_number":4141414141,"user_altmobile_number":4141414141,"user_email":"ALOO.GOBI@GMAIL.COM","user_type":"Student","active_status":1,"uniqueid":6,"username":"aloogobi","subscribe_message":0,"subscribe_call":1,"subscribe_mail":1,"permanent_address":null,"current_address":"Kumaraswamy Layout","city":"Bangalore","state":"Karnataka"}};
     this._restService.get('/user/userinfo/'+sessionStorage.getItem('userid')).then( res => {
       console.log(sessionStorage.getItem('userid'));
       if(res.status == true){
         this.userproinfo = res.result;
         console.log(this.userproinfo);
       }
     });
    }
    

    openUploadPhotoModal() {
      console.log('Heeo');
      // let myModal = this.modalCtrl.create(ModalPage);
      // myModal.present();
      var modalPage = this.modalCtrl.create('ModalPage'); 
      modalPage.present();
    }

}
