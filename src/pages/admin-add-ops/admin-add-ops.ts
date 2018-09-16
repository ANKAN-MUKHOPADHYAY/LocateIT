import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';


@IonicPage()
@Component({
  selector: 'page-admin-add-ops',
  templateUrl: 'admin-add-ops.html',
})
export class AdminAddOpsPage {
  info: string = "newCourse";
  infor: string = "newLocation";

  courseDetails: { course_name: string, imageurl: any, createdby: any, course_status: any, parentcategory: any } = { course_name: '', imageurl: '', createdby: 'admin@techninzaz.com', course_status: 1, parentcategory: '' };

  //userdetail:{u_id : string, u_cid : string, u_lid : string} ={u_id : '', u_cid : '', u_lid : ''};

  LocationInfo: { Location_name: string, Location_city: string, Location_state: string, Location_pincode: string, Location_createdby: string, Location_relevant_name: string, Location_nearby: string } = { Location_name: '', Location_city: '', Location_state: '', Location_pincode: '', Location_createdby: '', Location_relevant_name: '', Location_nearby: '' }

  constructor(public navCtrl: NavController, public navParams: NavParams, public _restService: HttpServiceProvider) {

  }

  addNewCourseProcess() {
    console.log(this.courseDetails);
    this._restService.post('/admin/addnewcourse', JSON.stringify(this.courseDetails)).then(resp => {
      console.log(resp);
      this.courseDetails = { course_name: '', imageurl: '', createdby: 'admin@techninzaz.com', course_status: 1, parentcategory: '' };
      if (resp.status)
        alert("submission successful");
      else
        alert("submission failed");
    });
  }

  newLocation() {
    console.log(this.LocationInfo);
    this._restService.post('/admin/addlocation', JSON.stringify(this.LocationInfo)).then(resp => {
      //console.log(resp);
      console.log(this.LocationInfo);
      this.LocationInfo = { Location_name: '', Location_city: '', Location_state: '', Location_pincode: '', Location_createdby: '', Location_relevant_name: '', Location_nearby: '' };
      if (resp.status)
        alert("submission successful");
      else
        alert("submission failed");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminAddOpsPage');
  }
  gotoManage() {
    this.navCtrl.push('AdminManageOpsPage');
  }

}
