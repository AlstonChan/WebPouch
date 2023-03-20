import styles from "./dropdown.module.scss";
import logo from "@/../public/logo.png";

import { useRouter } from "next/router";
import Image from "next/image";

import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

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

  return (
    <AppBar //header tag
      position="static"
      color="transparent"
      sx={{ boxShadow: "none", mb: 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Page logo on left side  */}
          <Box sx={{ display: "flex", mr: 1, verticalAlign: "middle" }}>
            <Image src={logo} alt="Entripel" width="140" />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "right",
              display: { xs: "flex", sm: "none" },
            }}
          >
            <IconButton
              aria-label="Menu of navigation item"
              id="navigation-bar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              className={styles.hamburger}
              color="info"
              // sx={{
              //   backgroundColor: theme.palette.secondary.main,
              //   "&:hover": { backgroundColor: theme.palette.secondary.dark },
              // }}
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
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component="a"
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  // sx={{
                  //   backgroundColor: page === currentPage ? "#15616D" : "",
                  // }}
                  selected={page === currentPage ? true : false}
                >
                  <Typography textAlign="center">
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "right",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                my: 2,
                px: 1,
                borderRadius: 2,
                backgroundColor: theme.palette.secondary.main,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  color="inherit"
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
