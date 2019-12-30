import { Component, OnInit } from '@angular/core';
import {RecresultsService} from '../../services/recresults.service';
import {AuthService} from '../../auth/auth.service';
import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-result-list-refresh',
  templateUrl: './result-list-refresh.component.html',
  styleUrls: ['./result-list-refresh.component.css']
})
export class ResultListRefreshComponent implements OnInit {

  constructor(private auth: AuthService, private recresultsService: RecresultsService) {
  }

  ngOnInit() {
  }

  private refreshResults() {
    this.auth.GetUserToken().then((idToken: string) => {
      this.recresultsService.getresults();
    });

  }

}

