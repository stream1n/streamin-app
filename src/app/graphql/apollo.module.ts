import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';

const ourUri = '/graphql';

export function provideApollo(httpLink: HttpLink) {

  console.log('provide Apollo');
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8'
    }
  }));

  const token = localStorage.getItem('token');
  console.log('token: ' + token);
  const auth = setContext((operation, context) => ({
    headers: {
      Authorization: `Bearer ${token}`
    },
  }));

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
    deps: [HttpLink]
  }]
})

export class GraphQLModule {
}
