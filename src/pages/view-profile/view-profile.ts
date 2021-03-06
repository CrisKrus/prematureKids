import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SearchExercisePage} from "../search-exercise/search-exercise";
import {UserProvider} from "../../providers/user/user";
import {ChatProvider} from "../../providers/chat/chat";
import {PatientHistoryPage} from "../patient-history/patient-history";
import {EditProfilePage} from "../edit-profile/edit-profile";

@Component({
    selector: 'page-view-profile',
    templateUrl: 'view-profile.html',
})
export class ViewProfilePage {
    private user: any;
    gender: string;
    isMyProfile: boolean;

    constructor(public navCtrl: NavController,
                private navParams: NavParams,
                private userProvider: UserProvider,
                private chatProvider: ChatProvider) {
        if (this.isNotLoggedProfile()) {
            this.chargeDataFromNotLoggedProfile();
        } else {
            this.chargeDataFromLoggedProfile();
        }
    }

    ionViewDidLoad() {
        if (this.isNotLoggedProfile()) {
            this.chargeDataFromNotLoggedProfile();
        } else {
            this.chargeDataFromLoggedProfile();
        }
    }

    private isNotLoggedProfile() {
        return this.navParams.get('user');
    }

    private chargeDataFromNotLoggedProfile() {
        this.user = this.navParams.get('user');
        this.gender = this.translateGender();
        this.isMyProfile = false;
    }

    //TODO should only charge the data the first time
    // not all the time that the user enter (too much petitions, I think)
    private chargeDataFromLoggedProfile() {
        this.userProvider.getUser(this.userProvider.uid).then((user) => {
            this.user = user;
            this.gender = this.translateGender();
            this.isMyProfile = true;
        });
    }

    //TODO this is not the best way to do it, I think
    private translateGender() {
        return this.user['gender'] == "male" && "Hombre"
            || this.user['gender'] == "female" && "Mujer"
            || "No especificado";
    }

    editProfile() {
        this.navCtrl.push(EditProfilePage, {user: this.user});
    }

    logout() {
        this.userProvider.logout();
    }

    chat() {
        this.chatProvider.haveAChat(this.userProvider.uid, this.user.id).then((haveIt) => {
            if (!haveIt) {
                this.chatProvider.createChat(this.userProvider.uid, this.user.id);
            }
            //TODO go to chat page
        });
    }

    seeHistory() {
        this.userProvider.updateTimestampLastViewPatientHistory(this.userProvider.uid, this.user.id);
        this.navCtrl.push(PatientHistoryPage, {user: this.user});
    }

    addExercise() {
        this.navCtrl.push(SearchExercisePage,
            {
                assignedExercises: this.user.exercises || {},
                userId: this.user.id
            });
    }
}
