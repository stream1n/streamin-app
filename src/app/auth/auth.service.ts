import {Injectable} from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, first} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any;
  public userToken: string;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }

  GetUserToken() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.onAuthStateChanged( user => {
        if (user) {
          user.getIdToken().then(idToken => {
            this.userToken = idToken;
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
