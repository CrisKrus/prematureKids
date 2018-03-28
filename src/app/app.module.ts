import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginComponent} from '../components/login/login';
import { UserProvider } from '../providers/user/user';
import {HttpClientModule} from "@angular/common/http";
import {SigninPage} from "../pages/signin/signin";
import { MunicipalitiesProvider } from '../providers/municipalities/municipalities';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginComponent,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    MunicipalitiesProvider,
  ]
})
export class AppModule {}
