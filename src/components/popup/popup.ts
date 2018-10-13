import { Component } from '@angular/core';

/**
 * Generated class for the PopupComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popup',
  templateUrl: 'popup.html'
})
export class PopupComponent {

  text: string;

  constructor() {
    console.log('Hello PopupComponent Component');
    this.text = 'Hello World';
  }

}
