import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/gql/client";
import { theme } from "../lib/styles/theme";
import { GlobalStyle } from "../lib/styles/GlobalStyle";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <>
      <GlobalStyle />
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}
