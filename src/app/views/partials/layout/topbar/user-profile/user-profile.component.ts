import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {AuthenticationService} from '../../../../../auth/services/authentication.service';

@Component({
	selector: 'kt-user-profile',
	templateUrl: './user-profile.component.html',
})
export class UserProfileComponent implements OnInit {

	photoUrl$: Observable<string>;
	displayName$: Observable<string>;

	@Input() avatar = true;
	@Input() greeting = true;
	@Input() badge: boolean;
	@Input() icon: boolean;

	constructor(private auth: AuthenticationService) {
	}

	ngOnInit() {
		this.photoUrl$ = this.auth.getUserPhotoURL();
		this.displayName$ = this.auth.getUserDisplayName();
	}

	logout() {
		this.auth.logout();
	}

}
