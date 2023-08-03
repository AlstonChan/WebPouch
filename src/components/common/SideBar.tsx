// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import logo from "@/public/logo.png";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { navBarList } from "data/toolsRoute";
import { toLink } from "data/toolsItemDetails";
// MaterialUI Import
import { Box, Divider, Drawer, IconButton, Toolbar } from "@mui/material";
import { List, ListSubheader, ListItem } from "@mui/material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Menu as MenuIcon, Handyman } from "@mui/icons-material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

// type import
import type { NavList } from "data/types";
import type { NavBarListType } from "data/toolsRoute";

const drawerWidth = 230;

export default function SideBar() {
  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<string | null>(null);
  const containerRef = useRef<null | HTMLElement>(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // styling
  const navContainerStyle: SxProps<Theme> = {
    width: { md: drawerWidth },
    flexShrink: { sm: 0 },
    backgroundColor: {
      md: "transparent",
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
    mx: theme.spacing(0.6),
    borderRadius: theme.spacing(1),
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  };
  const ListItemIconStyle: SxProps<Theme> = { minWidth: theme.spacing(5.8) };
  const ListItemTextStyle: SxProps<Theme> = {
    "& .MuiListItemText-primary": { fontSize: "1rem" },
  };
  const IconButtonContainerStyle: SxProps<Theme> = {
    pt: theme.spacing(1.5),
    display: { md: "none" },
    position: "sticky",
    top: 0,
  };
  const xsIconButtonStyle: SxProps<Theme> = {
    mx: theme.spacing(1),
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
      <List aria-labelledby="Tools">
        <ListItem dense disablePadding>
          <ListItemButton
            sx={ListItemBtnStyle}
            href="/tools/"
            selected={location === "/tools"}
          >
            <ListItemIcon sx={ListItemIconStyle}>
              <Handyman />
            </ListItemIcon>
            <ListItemText sx={ListItemTextStyle} primary="Tools" />
          </ListItemButton>
        </ListItem>
      </List>

      {navBarList.map((category: NavBarListType) => {
        return (
          <List
            key={category.title}
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
                  <ListItemIcon sx={ListItemIconStyle}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText sx={ListItemTextStyle} primary={item.title} />
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
          <MenuIcon fontSize="small" />
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
          display: { xs: "block", md: "none" },
          ...drawerStyles,
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          ...drawerStyles,
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
