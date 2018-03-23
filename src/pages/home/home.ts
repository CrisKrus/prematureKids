import {Component} from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user: any | null;

  constructor() {
    this.user = window.localStorage.getItem('user');
  }
}
