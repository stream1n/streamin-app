import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './public/login/login.component';
import {TermsComponent} from './public/terms/terms.component';
import {PrivacyComponent} from './public/privacy/privacy.component';
import {AboutComponent} from './public/about/about.component';
import {TeamComponent} from './public/team/team.component';
import {ContactComponent} from './public/contact/contact.component';
import {BaseComponent} from './views/theme/base/base.component';
import {AuthenticationGuard} from './auth/guard/authentication.guard';
import {ErrorPageComponent} from './views/theme/content/error-page/error-page.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'terms', component: TermsComponent },
	{ path: 'privacy', component: PrivacyComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'team', component: TeamComponent },
	{ path: 'contact', component: ContactComponent },
	{
		path: '',
		component: BaseComponent,
		canActivate: [AuthenticationGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule),
			},
			{
				path: 'ngbootstrap',
				loadChildren: () => import('app/views/pages/ngbootstrap/ngbootstrap.module').then(m => m.NgbootstrapModule),
			},
			{
				path: 'material',
				loadChildren: () => import('app/views/pages/material/material.module').then(m => m.MaterialModule),
			},
			{
				path: 'wizard',
				loadChildren: () => import('app/views/pages/wizard/wizard.module').then(m => m.WizardModule),
			},
			{
				path: 'error/403',
				component: ErrorPageComponent,
				data: {
					type: 'error-v6',
					code: 403,
					title: '403... Access forbidden',
					desc: 'Looks like you don\'t have permission to access for requested page.<br> Please, contact administrator',
				},
			},
			{path: 'error/:type', component: ErrorPageComponent},
			{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
			{path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
		],
	},

	{path: '**', redirectTo: 'error/403', pathMatch: 'full'},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
