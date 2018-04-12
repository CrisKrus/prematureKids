import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {UserProvider} from '../providers/user/user';
import {HttpClientModule} from "@angular/common/http";
import {SigningUpPage} from "../pages/signing-up/signing-up";
import {MunicipalitiesProvider} from '../providers/municipalities/municipalities';
import {ViewProfilePage} from "../pages/view-profile/view-profile";
import {TabsComponent} from "../pages/tabs/tabs";
import {SearchPatientPage} from "../pages/search-patient/search-patient";
import {ExercisesProvider} from '../providers/exercises/exercises';
import {ViewExercisePage} from "../pages/view-exercise/view-exercise";
import {SearchExercisePage} from "../pages/search-exercise/search-exercise";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {enviroment} from "../enviroments/enviroments";
import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SearchPatientPage,
    SigningUpPage,
    ViewProfilePage,
    ViewExercisePage,
    TabsComponent,
    SearchExercisePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //TODO http client module is really in use?
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(enviroment.firebase)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SearchPatientPage,
    SigningUpPage,
    ViewProfilePage,
    ViewExercisePage,
    TabsComponent,
    SearchExercisePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    MunicipalitiesProvider,
    ExercisesProvider,
    AuthProvider,
  ]
})
export class AppModule {}
