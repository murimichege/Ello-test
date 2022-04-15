import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetBooks from "./components/GetBooks";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map((message, location, pathname) => {
      return(
        alert(`Graphql error message is ${message}`)
      )
    
    });
  }
});
const httpLink = new HttpLink({ uri:'https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql'});


const link = from([
  errorLink,
  httpLink
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return <ApolloProvider client={client}>
    {""}
    <GetBooks/>

  </ApolloProvider>
}

export default App;
