import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public name: string | null;
  private age: string | null;
  private email: string | null;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.name = navParams.data["name"];
    this.age = navParams.data["age"];
    this.email = navParams.data["email"];
  }

  logout() {
    window.localStorage.removeItem("name");
    this.navCtrl.setRoot(HomePage);
  }
}
