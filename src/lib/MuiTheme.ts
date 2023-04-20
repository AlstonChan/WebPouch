import { createTheme } from "@mui/material";

import { McLaren } from "next/font/google";

const mclaren = McLaren({
  weight: "400",
  subsets: ["latin"],
});

declare module "@mui/material/styles" {
  interface Palette {
    brightLink: Palette["primary"];
  }
  interface PaletteOptions {
    brightLink: PaletteOptions["primary"];
  }
}

const generalTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
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
    background: {
      default: "#002744",
    },
  },
  typography: {
    fontFamily: mclaren.style.fontFamily,
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
