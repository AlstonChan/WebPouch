// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 Devtools Chan Alston

import Head from "next/head";

import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import generalTheme from "@/lib/MuiTheme";
import { ThemeProvider } from "@emotion/react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={generalTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}
