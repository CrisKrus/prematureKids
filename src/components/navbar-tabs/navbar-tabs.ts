import { Component } from '@angular/core';

@Component({
  selector: 'navbar-tabs',
  templateUrl: 'navbar-tabs.html'
})
export class NavbarTabsComponent {

  text: string;

  constructor() {
    console.log('Hello NavbarTabsComponent Component');
    this.text = 'Hello World';
  }
}
