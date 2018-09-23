import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { AlertController } from 'ionic-angular';


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
  deleteMsg : any;
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams, public _restService: HttpServiceProvider, private alertCtrl: AlertController) {
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
  }

  getAllCourse() {
    this._restService.get('/search/allcourses').then(resp => {
      this.coursesOffered = resp.response;
      console.log(this.coursesOffered);
    });
  }
  deleteLocation(data) {
    console.log(data);
    this.deleteMsg = "Are you sure you want to delete "+data.LOC_LOCATION_NAME+ " location?";
    let url = '/admin/deleteLocation';
    this.presentConfirm(url,data);
  }
  
  
  deleteCourse(data){
    console.log(data);
    this.deleteMsg = "Are you sure you want to delete "+data.LOC_COURSE_NAME+ " course?";
    let url = '/admin/deleteCourse';
    this.presentConfirm(url,data);
  }
  
  disableCourse(course) {
    course.job="DISABLE";
    let url = '/admin/disableEnableCourse';
    this.dataCall(url,course);
  }
  enableCourse(course){
    course.job="ENABLE";
    let url = '/admin/disableEnableCourse';
    this.dataCall(url,course);
  }
  dataCall(url,data){
    this._restService.post(url, JSON.stringify(data)).then(resp => {
      console.log(resp);
      if (resp.status == true) {
        this.getAllCourse();
        this.getAllLocations();
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
  
  getCourses(ev) {
    console.log(ev);
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.coursesOffered = [];
      return;
    }
    this._restService.get('/search/searchcourses/'+val).then(data => {
      if(data.status){
        this.coursesOffered = data.response;
        this.focusme();
        console.log(this.coursesOffered);
      }
    });
}
  focusme(){ 
    setTimeout(()=>{
      this.searchBar.setFocus();
    }, 1000);
  }


  presentConfirm(url,data) {
    let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: this.deleteMsg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled');
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.dataCall(url,data);
          }
        }
      ]
    });
    alert.present();
  }
  
}



