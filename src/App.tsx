import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Themes";
import { useState } from "react";
import AppRoutes from "./routes/Routes.app";

function App() {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppRoutes themeToggle={themeToggler} />
    </ThemeProvider>
  );
}

export default App;
