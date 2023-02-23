import "@/styles/globals.css";

import type { AppProps } from "next/app";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import generalTheme from "@/lib/MuiTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={generalTheme}>
      <Component {...pageProps} />
      <CssBaseline />
    </ThemeProvider>
  );
}
