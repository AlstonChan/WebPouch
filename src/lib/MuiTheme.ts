// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import { createTheme } from "@mui/material";

import { McLaren, Ubuntu } from "next/font/google";

import type { CSSProperties } from "react";

const mclaren = McLaren({
  weight: "400",
  subsets: ["latin"],
});
const ubuntu = Ubuntu({
  weight: "700",
  subsets: ["latin"],
});

declare module "@mui/material/styles" {
  interface Palette {
    brightLink: Palette["primary"];
    highlight: Palette["primary"];
  }
  interface PaletteOptions {
    brightLink: PaletteOptions["primary"];
    highlight: PaletteOptions["primary"];
  }

  interface BreakpointOverrides {
    "xl-lg": true;
    "lg-md": true;
  }

  interface TypographyVariants {
    fontTitle: CSSProperties;
  }

  interface TypographyVariantsOptions {
    fontTitle?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontTitle: true;
  }
}

const generalTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      "lg-md": 1100,
      lg: 1200,
      "xl-lg": 1450,
      xl: 1536,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#002744",
      contrastText: "#fff",
    },
    secondary: {
      main: "#15616D",
      contrastText: "#fff",
    },
    brightLink: {
      main: "#00d1ff",
    },
    highlight: {
      main: "#12DCC4",
    },
    background: {
      default: "#002744",
    },
  },
  typography: {
    fontFamily: mclaren.style.fontFamily,
    fontTitle: ubuntu.style,
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: " #002744",
          backgroundImage: "none",
        },
      },
    },
  },
});

export default generalTheme;
