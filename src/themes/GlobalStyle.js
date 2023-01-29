import { createGlobalStyle } from "styled-components";
import * as theme from "./ThemeSwitcher/theme";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  
  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background: ${({ theme }) => theme.colors.bodyBackground};
    max-width: 1000px;
    min-height: 80vh;
    margin: 100px auto 0 auto;
    color: ${({ theme }) => theme.colors.text};
  }
`;