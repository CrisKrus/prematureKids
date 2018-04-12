import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {TabsPage} from "../pages/tabs/tabs";
import {AuthProvider} from "../providers/auth/auth";
import {LoginPage} from "../pages/login/login";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.checkSessionAndSetRootPage();
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  private checkSessionAndSetRootPage() {
    this.auth.Session.subscribe(session => {
      console.log('Sessio, ', session);
      if (session) {
        this.rootPage = TabsPage;
        this.auth.logout();
      } else {
        this.rootPage = LoginPage;
      }
    });
  }
}

