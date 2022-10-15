import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  body {
    background: no-repeat fixed ${({ theme }: any) => theme.background};
    color: ${({ theme }: any) => theme.text};
    transition: all 0.50s linear;
    font-family: 'Poppins', sans-serif;
  }
`;
