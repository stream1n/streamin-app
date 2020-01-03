import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { AuthenticationService } from '../auth/services/authentication.service';
import { environment } from '../../environments/environment';

const ourUri = environment.graphql.url;

export function provideApollo(httpLink: HttpLink, authservice: AuthenticationService) {

	const basic = setContext((operation, context) => ({
		headers: {
			'Content-Type': undefined
		}
	}));

	const auth = setContext(async (_, { headers }) => {

		await authservice.GetUserToken();

		const token = localStorage.getItem('token');
		console.log(token);
		return {
			headers: {
				Authorization: `Bearer ${token}`
			},
		};
	});

	const ourHttpLink = createHttpLink({ uri: ourUri, useGETForQueries: true });

	const link = ApolloLink.from([basic, auth, ourHttpLink]);

	const cache = new InMemoryCache();

	return {
		link,
		cache
	};
}

@NgModule({
	exports: [
		HttpClientModule,
		ApolloModule,
		HttpLinkModule
	],
	providers: [{
		provide: APOLLO_OPTIONS,
		useFactory: provideApollo,
		deps: [HttpLink, AuthenticationService]
	}]
})

export class GraphQLModule {
}
