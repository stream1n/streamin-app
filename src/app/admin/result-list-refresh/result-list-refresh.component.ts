import { Component, OnInit } from '@angular/core';
import {RecresultsService} from '../../services/recresults.service';

@Component({
  selector: 'app-result-list-refresh',
  templateUrl: './result-list-refresh.component.html',
  styleUrls: ['./result-list-refresh.component.css']
})
export class ResultListRefreshComponent implements OnInit {

  constructor(private recresultsService: RecresultsService) {
  }

  ngOnInit() {
  }

  private refreshResults() {
    this.recresultsService.getresults();
  }

}

