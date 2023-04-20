import logo from "@/public/logo.png";

import Image from "next/image";

import { Box, Divider, Drawer, IconButton, Toolbar } from "@mui/material";
import {
  List,
  ListSubheader,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Theme, SxProps } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { design, webDevelopment } from "data/toolsRoute";
import { toLink } from "data/toolsItemDetails";
import { NavList } from "data/types";

const drawerWidth = 230;

export default function SideBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerStyles: SxProps<Theme> = {
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  };

  const listSubHeaderStyle: SxProps<Theme> = { backgroundColor: "transparent" };

  const drawer = (
    <>
      <Toolbar>
        <Image src={logo} alt="Entripel" width="140" />
      </Toolbar>
      <Divider />
      <List
        aria-labelledby="Web Development"
        subheader={
          <ListSubheader
            component="div"
            id="Web Development"
            sx={listSubHeaderStyle}
          >
            Web Development
          </ListSubheader>
        }
      >
        {webDevelopment.map((item: NavList) => (
          <ListItem key={item.title} dense disablePadding>
            <ListItemButton href={toLink(item.title)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List
        aria-labelledby="UI/UX Design"
        subheader={
          <ListSubheader
            component="div"
            id="UI/UX Design"
            sx={listSubHeaderStyle}
          >
            UI/UX Design
          </ListSubheader>
        }
      >
        {design.map((item: NavList) => (
          <ListItem key={item.title} dense disablePadding>
            <ListItemButton href={toLink(item.title)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  let container = undefined;
  useEffect(() => {
    if (window !== undefined) {
      container = window.document.body;
    }
  }, []);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
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
