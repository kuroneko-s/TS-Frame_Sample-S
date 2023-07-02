import "@styles/reset.css";
import "@styles/globals.css";

import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { IGlobalContext } from "lib/Context.type";
import { darkTheme, lightTheme } from "@styles/theme";

export const GlobalContext = createContext<IGlobalContext>({
  isDarkMode: true,
});

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setDarkMode] = useState<boolean>(true);

  return (
    <GlobalContext.Provider
      value={{
        isDarkMode,
        setDarkMode,
      }}
    >
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
