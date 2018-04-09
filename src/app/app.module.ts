import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import { UserProvider } from '../providers/user/user';
import {HttpClientModule} from "@angular/common/http";
import {SigningUpPage} from "../pages/signing-up/signing-up";
import { MunicipalitiesProvider } from '../providers/municipalities/municipalities';
import {ViewProfilePage} from "../pages/view-profile/view-profile";
import {NavbarTabsComponent} from "../components/navbar-tabs/navbar-tabs";
import {SearchPatientPage} from "../pages/search-patient/search-patient";
import { ExercisesProvider } from '../providers/exercises/exercises';
import {ViewExercisePage} from "../pages/view-exercise/view-exercise";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SigningUpPage,
    ViewProfilePage,
    NavbarTabsComponent,
    SearchPatientPage,
    ViewExercisePage
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
    LoginPage,
    SigningUpPage,
    ViewProfilePage,
    NavbarTabsComponent,
    SearchPatientPage,
    ViewExercisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    MunicipalitiesProvider,
    ExercisesProvider,
  ]
})
export class AppModule {}
