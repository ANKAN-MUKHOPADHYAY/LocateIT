import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
/**
 * Generated class for the AdminManageOpsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-manage-ops',
  templateUrl: 'admin-manage-ops.html',
})
export class AdminManageOpsPage {
  info : string = "newCourse";
  infor: string ="newLocation";
  offeredLocation : any;
  coursesOffered : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _restService: HttpServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminManageOpsPage');
    this._restService.get('/search/alllocation').then(resp => {
      console.log(resp);
      this.offeredLocation = resp.response;
    });
    this.getAllCourse();
  }

  getAllCourse(){
    this._restService.get('/search/allcourses').then(resp => {
      this.coursesOffered = resp.response;
      console.log(this.coursesOffered);
    });
  }
  deleteCourse(data){
    console.log(data);
    this._restService.post('/admin/deleteCourse',JSON.stringify(data)).then(resp => {
      console.log(resp);
      if(resp.status == true){
        this.getAllCourse();
      }
    });
  }
}


