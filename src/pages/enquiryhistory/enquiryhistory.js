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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the EnquiryhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EnquiryhistoryPage = /** @class */ (function () {
    function EnquiryhistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sampleData = [{
                course_name: "Web design and development",
                enquiry_id: "22",
                enquiry_date: "01-03-2018",
                course_image: "https://www.webhopers.com/wp-content/uploads/2017/06/Web-Development-Packages-in-India-e1497005837829.jpg",
                enquiry_type: "free",
                enquiry_status: "opened",
                institute_count: "1"
            }, {
                course_name: "Java",
                enquiry_id: "32",
                enquiry_date: "05-03-2018",
                course_image: "https://fossbytes.com/wp-content/uploads/2017/09/Why-is-Java-the-best-programming-Language.png",
                enquiry_type: "free",
                enquiry_status: "closed",
                institute_count: "2"
            }, {
                course_name: "softwaretesting",
                enquiry_id: "31",
                enquiry_date: "04-03-2018",
                course_image: "http://www.tecmax.in/uploads/course/Software-Testing-Training-in-Bangalore.jpg",
                enquiry_type: "paid",
                enquiry_status: "opened",
                institute_count: "3"
            }, {
                course_name: "Bigdata",
                enquiry_id: "21",
                enquiry_date: "07-03-2018",
                course_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtgBhz11aOmGLP7VHg0ur6D4hxbonba6ULU6FFxUw7AdlmGwGZXQ",
                enquiry_type: "free",
                enquiry_status: "opened",
                institute_count: "4"
            }, {
                course_name: "Maths",
                enquiry_id: "26",
                enquiry_date: "02-03-2018",
                course_image: "https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2015/anewwayoftea.jpg",
                enquiry_type: "free",
                enquiry_status: "closed",
                institute_count: "5"
            }, {
                course_name: "English",
                enquiry_id: "40",
                enquiry_date: "11-03-2018",
                course_image: "https://www.franchiseindia.com/uploads/content/edu/art/english1-083866aacd.png",
                enquiry_type: "free",
                enquiry_status: "opened",
                institute_count: "6"
            }, {
                course_name: "Python",
                enquiry_id: "45",
                enquiry_date: "021-03-2018",
                course_image: "https://dziganto.github.io/assets/images/python_logo.jpeg?raw=true",
                enquiry_type: "paid",
                enquiry_status: "opened",
                institute_count: "7"
            }, {
                course_name: "Angularjs",
                enquiry_id: "50",
                enquiry_date: "15-03-2018",
                course_image: "http://kosmiktechnologies.com/wp-content/uploads/2017/12/AngularJs-training-in-Hyderabad-1-300x230.png",
                enquiry_type: "free",
                enquiry_status: "opened",
                institute_count: "8"
            }, {
                course_name: "Network",
                enquiry_id: "43",
                enquiry_date: "07-03-2018",
                course_image: "http://fossbytes.com/wp-content/uploads/2016/03/network-topology.jpg",
                enquiry_type: "free",
                enquiry_status: "opened",
                institute_count: "9"
            }, {
                course_name: "php",
                enquiry_id: "47",
                enquiry_date: "08-04-2018",
                course_image: "http://www.rnm.solutions/wp-content/uploads/2018/01/icon-php1-1.png",
                enquiry_type: "paid",
                enquiry_status: "opened",
                institute_count: "10"
            }];
    }
    EnquiryhistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EnquiryhistoryPage');
    };
    EnquiryhistoryPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-enquiryhistory',
            templateUrl: 'enquiryhistory.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], EnquiryhistoryPage);
    return EnquiryhistoryPage;
}());
export { EnquiryhistoryPage };
//# sourceMappingURL=enquiryhistory.js.map