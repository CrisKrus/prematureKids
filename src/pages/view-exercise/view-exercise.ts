import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import * as firebase from "firebase";

@Component({
  selector: 'page-view-exercise',
  templateUrl: 'view-exercise.html',
})
export class ViewExercisePage {
  private userSessionType;
  private exercise;
  protected textAreaInput: string;
  private images = [];
  private video = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,  // navParams are use it on html directly
              protected userProvider: UserProvider) {
    userProvider.userSessionType.then((type) => {
      this.userSessionType = type;
    });
    this.exercise = navParams.get('exercise');
    this.textAreaInput = this.exercise.observations || "";
  }

  ionViewWillEnter() {
    if (this.haveMediaTheExercise() && this.haveImagesTheExercise()) {
      this.fillImages();
    }

    if (this.haveMediaTheExercise() && this.haveVideoTheExercise()) {
      this.fillVideos();
    }

  }

  private fillVideos() {
    for (let mediaID of this.exercise.media.video) {
      firebase.storage()
        .ref('/exercises/' + this.exercise.id + '/' + mediaID)
        .getDownloadURL()
        .then((url) => {
          this.video.push(url);
        });
    }
  }

  private fillImages() {
    for (let mediaID of this.exercise.media.images) {
      firebase.storage()
        .ref('/exercises/' + this.exercise.id + '/' + mediaID)
        .getDownloadURL()
        .then((url) => {
          this.images.push(url);
        });
    }
  }

  private haveImagesTheExercise() {
    return this.exercise.media.images != undefined;
  }

  private haveVideoTheExercise() {
    return this.exercise.media.video != undefined;
  }

  private haveMediaTheExercise() {
    return this.exercise.media != undefined;
  }

  isPatient() {
    return this.userSessionType == 'patient';
  }

  isDoctor() {
    return this.userSessionType == 'doctor';
  }

  hasObservations() {
    return this.exercise.observations != undefined && this.exercise.observations != '';
  }

  exerciseDone() {
    this.userProvider.markExerciseDone(this.exercise.id, this.userProvider.uid, new Date())
      .then(() => {
        this.navCtrl.pop();
      });
  }

  assignExerciseWithObservations() {
    this.userProvider.assignExercise(this.exercise.id, this.navParams.get('userId'), this.textAreaInput)
      .then(() => {
        this.navCtrl.pop()
      });
  }
}