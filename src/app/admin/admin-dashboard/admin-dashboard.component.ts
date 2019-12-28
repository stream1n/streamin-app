import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  photoUrl$: Observable<string>;
  displayName$: Observable<string>;
  userToken$: Observable<string>;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.photoUrl$ = this.auth.getUserPhotoURL();
    this.displayName$ = this.auth.getUserDisplayName();
    this.auth.GetUserToken().then((idToken) => {
      console.log(idToken);
    });

  }
/*
public getEmployees(): Observable<Employee[]> {
  return new Promise((resolve, reject) =>
    this.authService.GetToken().then((idToken) => {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'JWT ' + idToken
        }),
      };

      this.http.get<Employee[]>(`${this.url}/employee/`, this.httpOptions)
          .then(resolve).catch(reject);

    })
  })
}
 */
  logout() {
    this.auth.logout();
  }

}
