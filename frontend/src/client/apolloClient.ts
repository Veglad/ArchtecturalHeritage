import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";

const REACT_APP_API_ENDPOINT = 'http://localhost:5000'

const httpLink = createHttpLink({
    uri: `${REACT_APP_API_ENDPOINT}/graphql`,
})

export const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({ addTypename: false, dataIdFromObject: (o) => o.id })
})
