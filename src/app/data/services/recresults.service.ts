import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {ALL_RESULTS_QUERY} from '../../graphql/graphql';
import {DataalertService} from './dataalert.service';

@Injectable({
	providedIn: 'root'
})
export class RecresultsService {

	constructor(private dataalertservice: DataalertService, private apollo: Apollo) {}

	getresults() {
		this.apollo.query({
			query: ALL_RESULTS_QUERY,
			fetchPolicy: 'network-only'
		}).subscribe((response: any) => {
			this.dataalertservice.results(response.data.results);
		});
	}

}
