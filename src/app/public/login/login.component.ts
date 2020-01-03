import { Component, OnInit, OnDestroy } from '@angular/core';

import {AuthenticationService} from '../../auth/services/authentication.service';

@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

	constructor(private auth: AuthenticationService) {
	}

	ngOnInit() {
		this.auth.InitFirebaseLoginUI();
	}

	ngOnDestroy() {
		this.auth.DestroyFirebaseLoginUI();
	}

}
