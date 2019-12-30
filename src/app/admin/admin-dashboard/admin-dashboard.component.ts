import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {log} from 'util';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  photoUrl$: Observable<string>;
  displayName$: Observable<string>;

  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit() {

    this.photoUrl$ = this.auth.getUserPhotoURL();
    this.displayName$ = this.auth.getUserDisplayName();
    this.auth.GetUserToken().then((idToken) => {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: 'Bearer ' + idToken
        }),
      };
      this.http.get(`/api/secureendpoint`, httpOptions).subscribe((data) => console.log(data));
    });

  }

  logout() {
    this.auth.logout();
  }

}
