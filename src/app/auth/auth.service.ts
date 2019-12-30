import {Injectable} from '@angular/core';

import * as firebaseui from 'firebaseui';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private ui: firebaseui.auth.AuthUI;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  InitFirebaseLoginUI() {
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

  DestroyFirebaseLoginUI() {
    this.ui.delete();
  }

  onLoginSuccessful(result, redirectUrl) {
    localStorage.setItem('user', JSON.stringify(result));
    return true;
  }

  GetUserToken() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.onAuthStateChanged( user => {
        if (user) {
          user.getIdToken().then(idToken => {
            console.log('setting token');
            localStorage.setItem('token', idToken);
            resolve(idToken);
          });
        }
      });
    });
  }

  getUserPhotoURL(): Observable<string> {
    return this.afAuth.authState.pipe(map(user => user ? user.photoURL : null));
  }

  getUserDisplayName(): Observable<string> {
    return this.afAuth.authState.pipe(map(user => user ? user.displayName : null));
  }

  isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null ? true : false;
  }

  logout() {
    localStorage.setItem('user', null);
    this.afAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']));
  }

}
