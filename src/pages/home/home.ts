import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name: string | null;
  private age: string | null;
  private email: string | null;

  constructor(public navCtrl: NavController) {
    this.name = window.localStorage.getItem('name');
    this.age = window.localStorage.getItem('age');
    this.email = window.localStorage.getItem('email');
  }

  logout() {
    window.localStorage.removeItem("name");
    this.navCtrl.setRoot(HomePage);
  }
}
