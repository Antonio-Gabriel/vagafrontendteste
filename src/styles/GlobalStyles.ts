import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {    
    --body-color: ${(props) => props.theme.colors.background};
    --hilight-color: ${(props) => props.theme.colors.hilight};
    --text-color: ${(props) => props.theme.colors.text};
    --primary-color: ${(props) => props.theme.colors.primary};
    --success-color: ${(props) => props.theme.colors.success};
  }

  body {
    background: var(--body-color);
    color: var(--text-color);
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    transition: all .2s linear;
  }

  ul, li, a {
    color: var(--text-color);
    list-style: none;
    text-decoration: none;
  }
`;
