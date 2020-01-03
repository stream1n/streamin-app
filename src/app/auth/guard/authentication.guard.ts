import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

	constructor(private auth: AuthenticationService, private router: Router) {
	}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const isLoggedIn = this.auth.isLoggedIn();

		if (!isLoggedIn) {
			this.router.navigate(['/login']);
		}

		return isLoggedIn;
	}

}
