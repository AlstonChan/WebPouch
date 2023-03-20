import { createTheme } from "@mui/material";

import { McLaren } from "next/font/google";

const mclaren = McLaren({
  weight: "400",
  subsets: ["latin"],
});

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
    },
    secondary: {
      main: "#15616D",
    },
    background: {
      default: "#002744",
    },
  },
  typography: {
    fontFamily: mclaren.style.fontFamily,
  },
});

export default generalTheme;
