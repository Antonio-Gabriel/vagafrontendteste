import { ThemeProvider, DefaultTheme } from "styled-components";

import { AuthContextProvider } from "./provider/AuthContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { GlobalStyles } from "./styles/GlobalStyles";
import { useDarkMode } from "./hooks/useDarkMode";

import { Routes } from "./routes";

import "./assets/icons/style.css";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  const [theme, setTheme] = useDarkMode<DefaultTheme>("theme", dark);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes toggleTheme={toggleTheme} />
        </BrowserRouter>
        <GlobalStyles />
        <ToastContainer />
      </ThemeProvider>
    </AuthContextProvider>
  );
}
