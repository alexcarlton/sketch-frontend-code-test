import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
  
  #__next {
    height: 100vh;
  }
`;

export { GlobalStyle };
