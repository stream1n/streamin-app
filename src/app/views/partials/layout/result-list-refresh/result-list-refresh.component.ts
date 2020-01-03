import { Component, OnInit } from '@angular/core';
import {RecresultsService} from '../../../../data/services/recresults.service';
import {AuthenticationService} from '../../../../auth/services/authentication.service';

@Component({
	selector: 'kt-result-list-refresh',
	templateUrl: './result-list-refresh.component.html',
	styleUrls: ['./result-list-refresh.component.scss']
})
export class ResultListRefreshComponent implements OnInit {

	constructor(private auth: AuthenticationService, private recresultsService: RecresultsService) {
	}

	ngOnInit() {
	}

	public refreshResults() {
		this.auth.GetUserToken().then((idToken: string) => {
			this.recresultsService.getresults();
		});

	}

}
