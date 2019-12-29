import { Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  ui: firebaseui.auth.AuthUI;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private ngZone: NgZone) {
  }

  ngOnInit() {

    const uiConfig = {
      signInSuccessUrl: '/admin',
      tosUrl: '/terms',
      privacyPolicyUrl: '/privacy',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      callbacks: {

        signInSuccessWithAuthResult: this
          .onLoginSuccessful
          .bind(this)
      }

    };

    this.ui = new firebaseui.auth.AuthUI(this.afAuth.auth);

    this.ui.start('#firebaseui-auth-container', uiConfig);
  }

  ngOnDestroy() {
    this.ui.delete();
  }

  onLoginSuccessful(result, redirectUrl) {
    localStorage.setItem('user', JSON.stringify(result));
    return true;
  }

}
