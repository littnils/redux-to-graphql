import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';

const client = new ApolloClient({
  headers: {
    "Grass-Account-Type": "vendor",
    "Grass-Account-Id": 15554
  },
  uri: 'http://localhost:8080/graphql',
  resolvers: {},
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
