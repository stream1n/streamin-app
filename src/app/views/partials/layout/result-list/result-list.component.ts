import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Result } from '../../../../graphql/types';
import {DataalertService} from '../../../../data/services/dataalert.service';
import {RecresultsService} from '../../../../data/services/recresults.service';

@Component({
	selector: 'kt-result-list',
	templateUrl: './result-list.component.html',
	styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {
	displayedColumns = ['run-time', 'trade-id', 'book', 'ccy-pair', 'candidate', 'reference', 'diff'];
	results: Array<Result>;

	constructor(private dataalertService: DataalertService,
				private resresultsService: RecresultsService,
				private changeDetectorRefs: ChangeDetectorRef) {
	}

	ngOnInit() {
		this.results = new Array<Result>();
		this.dataalertService.getResults().subscribe(results => { this.reactresults(results); });
		this.resresultsService.getresults();
	}

	private reactresults(results: Array<Result>) {
		this.results = results;
		this.changeDetectorRefs.detectChanges();
	}

}

