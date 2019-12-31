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
  }

  logout() {
    this.auth.logout();
  }

}
