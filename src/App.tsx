import { ThemeProvider, DefaultTheme } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { GlobalStyles } from "./styles/GlobalStyles";
import { useDarkMode } from "./hooks/useDarkMode";

import { Auth } from "./pages/Auth";

import "./assets/icons/style.css";

export function App() {
  const [theme, setTheme] = useDarkMode<DefaultTheme>("theme", light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Auth toggleTheme={toggleTheme} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
