import { useMemo } from "react";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import merge from "deepmerge";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    fetchOptions: {
      mode: "no-cors",
    },
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: "https://graphql.sketch.cloud/api",
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache);

    _apolloClient.cache.restore(data);
  }
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
