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

  .teal {
    background-color: ${theme.teal.colors.styledNavLink};
  }

  .mint {
   background-color: ${theme.mint.colors.styledNavLink};
  }

  .blue {
   background-color: ${theme.blue.colors.styledNavLink};
  }

  .orange {
    background-color: ${theme.orange.colors.styledNavLink};
  }

  .magenta {
    background-color: ${theme.magenta.colors.styledNavLink};
  }

  .turquoise {
   background-color: ${theme.turquoise.colors.styledNavLink};
  }
  
  .selected {
    background-color: black;

    &:hover {
      transform: scale(1);
      cursor: not-allowed;
    }
  }
`;
