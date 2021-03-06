import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {SigningUpPage} from "../pages/signing-up/signing-up";
import {MunicipalitiesProvider} from '../providers/municipalities/municipalities';
import {ViewProfilePage} from "../pages/view-profile/view-profile";
import {TabsPage} from "../pages/tabs/tabs";
import {SearchPatientPage} from "../pages/search-patient/search-patient";
import {ExercisesProvider} from '../providers/exercises/exercises';
import {ViewExercisePage} from "../pages/view-exercise/view-exercise";
import {SearchExercisePage} from "../pages/search-exercise/search-exercise";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {environment} from "../enviroments/environments";
import {UserProvider} from '../providers/user/user';
import {ChatProvider} from '../providers/chat/chat';
import {ChatListPage} from "../pages/chat-list/chat-list";
import {ViewChatPage} from "../pages/view-chat/view-chat";
import {PatientHistoryPage} from "../pages/patient-history/patient-history";
import {EditProfilePage} from "../pages/edit-profile/edit-profile";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        LoginPage,
        SearchPatientPage,
        SigningUpPage,
        ViewProfilePage,
        ViewExercisePage,
        TabsPage,
        SearchExercisePage,
        ChatListPage,
        ViewChatPage,
        PatientHistoryPage,
        EditProfilePage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(environment.firebase)
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
        TabsPage,
        SearchExercisePage,
        ChatListPage,
        ViewChatPage,
        PatientHistoryPage,
        EditProfilePage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        MunicipalitiesProvider,
        ExercisesProvider,
        UserProvider,
        ChatProvider,
    ]
})
export class AppModule {
}
