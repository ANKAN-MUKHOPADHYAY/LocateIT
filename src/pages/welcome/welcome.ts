import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Searchbar } from 'ionic-angular';
/*import { AlertController } from 'ionic-angular';*/
import { HttpServiceProvider } from '../../providers/http-service/http-service';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})

export class WelcomePage {
  currentItems: any;
  @ViewChild('si') searchBar: Searchbar;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restService: HttpServiceProvider) {
    console.log(this.navCtrl);
  }

  focusme(){ 
    setTimeout(()=>{
      this.searchBar.setFocus();
    }, 1000);
  }

  getCourses(ev) {
      console.log(ev);
      let val = ev.target.value;
      if (!val || !val.trim()) {
        this.currentItems = [];
        return;
      }
      this.restService.get('/searchcourses/'+val).then(data => {
        if(data.status){
          this.currentItems = data.response;
          this.focusme();
          console.log(this.currentItems);
        }
      });
  }
  locationSearch(){
    this.navCtrl.push('SelectLocationPage');
  }
  openItem(item) {
    this.navCtrl.push('SelectLocationPage', {
      selectedCourse : item
    });
  }

  showPopup($scope, $ionicPopup) {
    // When button is clicked, the popup will be shown...
    $scope.showPopup = function($scope, $ionicPopup) {
       $scope.data = {}
     
       // Custom popup
       var myPopup = $ionicPopup.show({
          template: '<input type = "text" ng-model = "data.model">',
          title: 'Title',
          subTitle: 'Subtitle',
          scope: $scope,
       
          buttons: [
             { text: 'Cancel' }, {
                text: '<b>Save</b>',
                type: 'button-positive',
                onTap: function(e) {
             
                   if (!$scope.data.model) {
                      //don't allow the user to close unless he enters model...
                      e.preventDefault();
                   } else {
                      return $scope.data.model;
                   }
                }
             }
          ]
       });
 
       myPopup.then(function(res) {
          console.log('Tapped!', res);
       });    
    };


}
}
