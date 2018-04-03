import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private user: any | null;

  constructor(public navCtrl: NavController) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }
}
