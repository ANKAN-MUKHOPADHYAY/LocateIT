import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { constantJson } from '../../constants';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the HttpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpServiceProvider {
	apiUrl : any;
	headers = new HttpHeaders({'Content-Type': 'application/json'});
	loading : any = null;
	title : any;
	message : any;
	status : any;

	//private customError : Array<string>; 

	constructor(public http: HttpClient, public loader: LoadingController, private alertCtrl: AlertController) {
		this.apiUrl = constantJson["serverUrl"]+constantJson["apiUrl"];
	}

	getService(url:string, showLoader=true):Promise<any>{
		return this.http.get(url,{headers: this.headers})
			.toPromise()
			.then(response => {
				return response;
			})
			.catch(error => {
				if(this){
					this.hideLoaderFunc();
				}
				this.status = error.error.status;
				return Promise.reject(this.status);
			});
	}

	get(url:string,showLoader=true):Promise<any>{
		this.showLoaderFunc(showLoader);
		var apiUrl = this.apiUrl+url;
		return this.http.get(apiUrl,{headers: this.headers})
			.toPromise()
			.then(response => {
				this.hideLoaderFunc();
				return response;
			})
			.catch(error => {
				if(this){
					this.hideLoaderFunc();
				}
				this.status = error.error.status;
				return Promise.reject(this.status);
			});
	}

	post(url:string,reqBody:string,showLoader=true):Promise<any>{
		this.showLoaderFunc(showLoader);
		var apiUrl = this.apiUrl+url;
		return this.http.post(apiUrl,reqBody,{headers: this.headers})
			.toPromise()
			.then(response => {
				this.hideLoaderFunc();
				return response;
			})
			.catch(error => {
				if(this){
					this.hideLoaderFunc();
				}
				this.status = error.error.status;
				return Promise.reject(this.status);
			});
	}

	delete(url:string,showLoader=true):Promise<any>{
		this.showLoaderFunc(showLoader);
		var apiUrl = this.apiUrl+url;
		return this.http.delete(apiUrl,{headers: this.headers})
			.toPromise()
			.then(response => {
				this.hideLoaderFunc();
				return response;
			})
			.catch(error => {
				if(this){
					this.hideLoaderFunc();
				}
				this.status = error.error.status;
				return Promise.reject(this.status);
			});
	}

	put(url:string,reqBody:string,showLoader=true):Promise<any>{
		this.showLoaderFunc(showLoader);
		var apiUrl = this.apiUrl+url;
		return this.http.put(apiUrl,reqBody,{headers: this.headers})
			.toPromise()
			.then(response => {
				this.hideLoaderFunc();
				return response;
			})
			.catch(error => {
				if(this){
					this.hideLoaderFunc();
				}
				this.status = error.error.status;
				return Promise.reject(this.status);
			});
	}

	private showLoaderFunc(showLoader:boolean){
		if(showLoader && this.loading == null){
			this.loading = this.loader.create({
				content: 'Please wait. We are loading ...'
			})
			this.loading.present();
			setTimeout(()=> {
				if(this.loading){
					this.loading.dismiss();
					this.loading = null;
				}
			}, 20000);
		}
	}

	private hideLoaderFunc(){
		if(this.loading){
			this.loading.dismiss();
			this.loading = null;
		}
	}

}
