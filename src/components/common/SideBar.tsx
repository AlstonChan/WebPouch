// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import logo from "@/public/logo.png";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { design, webDevelopment } from "data/toolsRoute";
import { toLink } from "data/toolsItemDetails";
// MaterialUI Import
import { Box, Divider, Drawer, IconButton, Toolbar } from "@mui/material";
import { List, ListSubheader, ListItem } from "@mui/material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Menu as MenuIcon, WavingHand } from "@mui/icons-material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

// type import
import type { NavList } from "data/types";

const drawerWidth = 230;

export default function SideBar() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<string | null>(null);
  const containerRef = useRef<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  type NavBarListType = { title: string; data: NavList[] };
  const navBarList: NavBarListType[] = [
    { title: "Web Development", data: webDevelopment },
    { title: "UI/UX Design", data: design },
  ];

  // styling
  const navContainerStyle: SxProps<Theme> = {
    width: { sm: drawerWidth },
    flexShrink: { sm: 0 },
    backgroundColor: {
      sm: "transparent",
      xs: theme.palette.primary.dark,
    },
  };
  const LogoContainerStyle: SxProps<Theme> = {
    display: "flex",
    justifyContent: "center",
  };
  const drawerStyles: SxProps<Theme> = {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
      borderColor: theme.palette.secondary.main,
    },
  };
  const listSubHeaderStyle: SxProps<Theme> = { backgroundColor: "transparent" };
  const ListItemBtnStyle: SxProps<Theme> = {
    py: theme.spacing(0.6),
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  };
  const IconButtonContainerStyle: SxProps<Theme> = {
    pt: theme.spacing(1.5),
    display: { sm: "none" },
    position: "sticky",
    top: 0,
  };
  const xsIconButtonStyle: SxProps<Theme> = {
    mx: theme.spacing(1.5),
    border: `1px solid ${theme.palette.secondary.light}`,
    borderRadius: theme.spacing(1),
    color: theme.palette.secondary.light,
    boxShadow: "0px 12px 25px -10px #2B808A92",
  };

  // component
  const drawer = (
    <>
      <Toolbar sx={LogoContainerStyle}>
        <Link href="/">
          <Image
            src={logo}
            alt="WebPouch"
            width="200"
            style={{ verticalAlign: "middle" }}
          />
        </Link>
      </Toolbar>

      <Divider sx={{ borderColor: theme.palette.secondary.main }} />
      <List aria-labelledby="Welcome to Tools">
        <ListItem dense disablePadding>
          <ListItemButton
            sx={ListItemBtnStyle}
            href="/tools/"
            selected={location === "/tools"}
          >
            <ListItemIcon>
              <WavingHand />
            </ListItemIcon>
            <ListItemText primary="Welcome to Tools" />
          </ListItemButton>
        </ListItem>
      </List>

      {navBarList.map((category: NavBarListType) => {
        return (
          <List
            aria-labelledby={category.title}
            subheader={
              <ListSubheader
                component="div"
                id={category.title}
                sx={listSubHeaderStyle}
              >
                {category.title}
              </ListSubheader>
            }
          >
            {category.data.map((item: NavList) => (
              <ListItem key={item.title} dense disablePadding>
                <ListItemButton
                  sx={ListItemBtnStyle}
                  href={toLink(item.title)}
                  selected={location === toLink(item.title)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        );
      })}
    </>
  );

  useEffect(() => {
    if (window !== undefined) {
      containerRef.current = window.document.body;
      const path = window.location.pathname;
      setLocation(path);
    }
  }, []);

  return (
    <Box component="nav" sx={navContainerStyle} aria-label="mailbox folders">
      <Box sx={IconButtonContainerStyle}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={xsIconButtonStyle}
        >
          <MenuIcon />
        </IconButton>
      </Box>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={containerRef.current}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          ...drawerStyles,
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          ...drawerStyles,
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
