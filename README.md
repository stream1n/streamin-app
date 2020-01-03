remember to update the Dockerfile and cloudbuild file once dir renamed etc..
npm install firebase --save
npm install firebaseui --save
npm install @angular/fire --save
npm install apollo-angular --save
npm install apollo-angular-link-http --save
apollo-cache-inmemory
apollo-client
apollo-link-context
apollo-link-http
graphql
graphql-tag

ng g component public/login
ng g component public/terms
ng g component public/privacy
ng g component public/about
ng g component public/team
ng g component public/contact
ng g component public/page-not-found
	
ng g s auth/services/authentication
ng g g auth/guard/authentication
   
ng g module graphql

@import "~firebaseui/dist/firebaseui.css"; into style.scss


src/app/views/partials/layout/topbar/user-profile/user-profile.component... files were updated
src/app/views/theme/footer/footer.component.html was updated

ng g s data/services/dataalert
ng g s data/services/recresults

Add to app.module.ts providers
		DataalertService,
		RecresultsService
		
		
ng g c views/partials/layout/result-list-refresh
ng g c views/partials/layout/result-list

add to src/app/views/partials/partials.module.ts exports
		ResultListRefreshComponent,
		ResultListComponent,

Update the environment files, adding:
	firebase: {
		apiKey: 'AIzaSyBvUgdsykhk4CEry9WcwRVa7nh9H2h5e60',   ( from Identity Platform -> Providers -> Application setup details )
		authDomain: 'streamin-263110.firebaseapp.com'
	},
	graphql: {
		url: '/graphql'
	},
