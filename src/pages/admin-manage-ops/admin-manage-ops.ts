import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
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
  @ViewChild('search') searchBar: Searchbar;
  info : string = "newCourse";
  infor: string ="newLocation";
  offeredLocation : any;
  coursesOffered : any;
  locations : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public _restService: HttpServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminManageOpsPage');

    this.getAllCourse();
    this.getAllLocations();
  }

  getAllLocations() {
    this._restService.get('/search/alllocation').then(resp => {
      console.log(resp);
      this.offeredLocation = resp.response;
    });
    this.getAllCourse();
  }

  getAllCourse() {
    this._restService.get('/search/allcourses').then(resp => {
      this.coursesOffered = resp.response;
      console.log(this.coursesOffered);
    });
  }
  deleteLocation(data) {
    console.log(data);
    this._restService.post('/admin/deleteLocation', JSON.stringify(data)).then(resp => {
      console.log(resp);
      if (resp.status == true) {
        this.getAllLocations();
      }
    });
  }
  deleteCourse(data){
    console.log(data);
    this._restService.post('/admin/deleteCourse', JSON.stringify(data)).then(resp => {
      console.log(resp);
      if (resp.status == true) {
        this.getAllCourse();
      }
    });
  }
  disableCourse(course) {
    course.job="DISABLE";
    this.dataCall(course);
  }
  enableCourse(course){
    course.job="ENABLE";
    console.log(course);
    this.dataCall(course);
  }
  dataCall(data){
    this._restService.post('/admin/disableEnableCourse', JSON.stringify(data)).then(resp => {
      console.log(resp);
      if (resp.status == true) {
        this.getAllCourse();
      }
    });
  }
  getLocation(loc){
  	let val = loc.target.value;
      if (!val || !val.trim()) {
        this.locations = [];
        return;
      }
      
      this._restService.get('/search/searchlocations/'+val).then(data => {
        if(data.status){
          this.offeredLocation = data.response;
          this.focusme();
        }
      });
  }
  focusme(){ 
    setTimeout(()=>{
      this.searchBar.setFocus();
    }, 1000);
  }
}



