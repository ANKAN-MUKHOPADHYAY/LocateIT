import { Component } from '@angular/core';

/**
 * Generated class for the InstInfoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'inst-info',
  templateUrl: 'inst-info.html'
})
export class InstInfoComponent {

  text: string;

  constructor() {
    console.log('Hello InstInfoComponent Component');
    this.text = 'Hello World';
  }

}
