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

  @-webkit-keyframes glow {
    from {
      background: var(--success-color);
    }
    to {
      background: green;
    }
  }

  input[type="checkbox"] {
      -webkit-appearance: none;
      appearance: none;
      background-color: var(--hilight-color);
      margin: 0;

      font: inherit;
      color: currentColor;
      width: 21px;
      height: 21px;
      border: 0.15em solid var(--hilight-color);
      border-radius: 0.15em;
      transform: translateY(-0.075em);

      display: grid;
      place-content: center;
    }

    input[type="checkbox"]::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em var(--primary-color);
    }

    input[type="checkbox"]:checked::before {
      transform: scale(1);

      transform-origin: bottom left;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }
`;
