// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import styles from "./dropdown.module.scss";
import logo from "@/public/logo.png";

import { useRouter } from "next/router";
import Image from "next/image";

import { useEffect, useState } from "react";
// MaterialUI Import
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu, Container, Button, MenuItem } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

type Navigation = "home" | "tools" | "flow";
const pages: Navigation[] = ["home", "tools", "flow"];

export default function NavBar() {
  const theme = useTheme();
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [currentPage, setCurrentPage] = useState<null | Navigation>(null);

  useEffect(() => {
    router.prefetch("/");
    router.prefetch("/tools");
    router.prefetch("/flow");

    if (router.route === "/") {
      setCurrentPage("home");
    } else {
      const route: any = router.route.slice(1);
      setCurrentPage(route);
    }
  }, [router]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page?: Navigation) => {
    setAnchorElNav(null);

    if (window) {
      const currentPath = window.location.pathname;
      switch (page) {
        case "home":
          if (currentPath === "/") return;
          router.push("/");
          break;
        case "tools":
          if (currentPath === "/tools") return;
          router.push("/tools");
          break;
        case "flow":
          if (currentPath === "/flow") return;
          router.push("/flow");
          break;
      }
    }
  };

  // styling
  const appBarStyle: SxProps<Theme> = { boxShadow: "none", mb: 1 };
  const logoContainerStyle: SxProps<Theme> = {
    display: "flex",
    mr: theme.spacing(1),
    py: theme.spacing(1),
    verticalAlign: "middle",
  };
  const hamburgerDropdownContainerStyle: SxProps<Theme> = {
    flexGrow: theme.spacing(1),
    justifyContent: "right",
    display: { xs: "flex", sm: "none" },
  };
  const hamburgerDropdownMenuStyle: SxProps<Theme> = {
    display: { xs: "block", sm: "none" },
    "& .MuiMenu-paper": {
      backgroundColor: theme.palette.secondary.main,
    },
  };
  const hamburgerDropdownMenuItemStyle: SxProps<Theme> = {
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.dark,
    },
  };
  const navigationPanelContainer: SxProps<Theme> = {
    flexGrow: 1,
    justifyContent: "right",
    display: { xs: "none", sm: "flex" },
  };
  const navigationPanel: SxProps<Theme> = {
    display: { xs: "none", sm: "flex" },
    my: theme.spacing(2),
    px: theme.spacing(1),
    borderRadius: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  };
  const navigationPanelButton: SxProps<Theme> = {
    fontSize: theme.typography.body1.fontSize,
    px: theme.spacing(2),
    py: theme.spacing(1.3),
  };

  // tsx return statement
  return (
    // header tag
    <AppBar position="static" color="transparent" sx={appBarStyle}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Page logo on left side  */}
          <Box sx={logoContainerStyle}>
            <Image src={logo} alt="WebPouch" width="240" />
          </Box>

          <Box sx={hamburgerDropdownContainerStyle}>
            {/* hamburger icon */}
            <IconButton
              aria-label="Menu of navigation item"
              id="navigation-bar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className={styles.hamburger}
              color="info"
            >
              <svg
                className={`${styles.ham} ${styles.hamRotate} ${
                  styles.hamAnimate
                } ${anchorElNav ? styles.activeMenu : ""}`}
                viewBox="0 0 100 100"
                width="40"
              >
                <path
                  className={`${styles.line} ${styles.top}`}
                  d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
                />
                <path
                  className={`${styles.line} ${styles.middle}`}
                  d="m 30,50 h 40"
                />
                <path
                  className={`${styles.line} ${styles.bottom}`}
                  d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
                />
              </svg>
            </IconButton>

            {/* hamburger dropdown menu */}
            <Menu
              id="navigation-bar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()}
              sx={hamburgerDropdownMenuStyle}
            >
              {pages.map((page) => (
                <MenuItem
                  component="a"
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={hamburgerDropdownMenuItemStyle}
                  selected={page === currentPage ? true : false}
                >
                  <Typography textAlign="center">
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* normal navigation panel */}
          <Box sx={navigationPanelContainer}>
            <Box sx={navigationPanel}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  color="inherit"
                  sx={navigationPanelButton}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
