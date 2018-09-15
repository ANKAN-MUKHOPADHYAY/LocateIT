import { Component } from '@angular/core';
import { HttpServiceProvider } from '../../providers/http-service/http-service';

@Component({
	selector: 'recommended-institute',
	templateUrl: 'recommended-institute.html'
})
export class RecommendedInstituteComponent {

	recommended: any = [{
		name: "ZoomCar",
		imgUrl: "https://image3.mouthshut.com/images/imagesp/925725994s.jpg",
		address: "Brigade Millenium, JP Nagar 5th phase",
		reviews: "30",
		students: ""
	}, {
		name: "Common Floor",
		imgUrl: "https://teja13.kuikr.com/is/p/f/800x600/images/new_home/commonfloor_logo.png",
		address: "Domlur,Bangalore",
		reviews: "90",
		students: ""
	}, {
		name: "CouponDunia",
		imgUrl: "",
		address: "Yellankha",
		reviews: "20",
		students: ""
	}]
	recommendedInstituteUsingEnq: any;
	recommendedInstitutes: any;

	constructor(public _restservice: HttpServiceProvider) {
	
	}

	ngOnInit(){
		this.recommendedInstituteUsingEnq = '/recommend/recommended/' + sessionStorage.getItem('enquiry') + '/' + sessionStorage.getItem('instlooking');
		this.getData();
	}

	getData() {
		this._restservice.get(this.recommendedInstituteUsingEnq).then(res =>{
			console.log(res);
			this.recommendedInstitutes=res.results;
		});
	}
}
