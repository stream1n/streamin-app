import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
      this.auth.InitFirebaseLoginUI();
  }

  ngOnDestroy() {
    this.auth.DestroyFirebaseLoginUI();
  }

}
