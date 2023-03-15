import Head from "next/head";
import { McLaren } from "next/font/google";

import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";
import generalTheme from "@/lib/MuiTheme";

interface Props {
  children: ReactNode;
}

const McLarenFont = McLaren({
  weight: "400",
  subsets: ["latin"],
  variable: "--McLaren",
});

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={generalTheme}>
        <CssBaseline />
        <main className={McLarenFont.className}>{children}</main>
      </ThemeProvider>
    </>
  );
}
