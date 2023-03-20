import styles from "./dropdown.module.scss";
import logo from "@/../public/logo.png";

import Image from "next/image";

import { useState } from "react";
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

const pages = ["Home", "Tools", "Flow"];

export default function NavBar() {
  const theme = useTheme();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
              sx={{
                backgroundColor: theme.palette.secondary.main,
                "&:hover": { backgroundColor: theme.palette.secondary.dark },
              }}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
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
                  onClick={handleCloseNavMenu}
                  sx={{ color: "white", display: "block" }}
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
