import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
  selector: 'inst-course',
  templateUrl: 'inst-course.html'
})
export class InstCourseComponent {
  showDesc=[];
  courses: any;
  restUrl: any;
  navParamType : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _restservice: HttpServiceProvider) {
    this.showDesc.push(false);
    this.navParamType = typeof(this.navParams.data);
    this.instituteOfferedCourses();
    //console.log(this.courses);
  }
  showDescription(index,button){
    this.showDesc[index]=button;
  }

  instituteOfferedCourses() {
    if(this.navParamType === Number){
      this.restUrl = '/institute/getInstituteInformation/'+this.navParams.data;
		} else {
      this.restUrl = '/institute/getInstituteInformation/'+sessionStorage.getItem('instlooking');
		}
    this.getData();
  }

  getData() {
    this._restservice.get(this.restUrl).then( res => {
      this.courses = res.response[0].courses;
      //console.log(this.instituteInfos);
    });
  }

}
