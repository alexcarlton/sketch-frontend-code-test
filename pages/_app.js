import { ThemeProvider } from "styled-components";
import { theme } from "../lib/styles/theme";
import { GlobalStyle } from "../lib/styles/GlobalStyle";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
