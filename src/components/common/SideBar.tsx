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
import { LockPerson, Rocket, Code, Cloud, Storage } from "@mui/icons-material";
import { Analytics, Image as ImageIcon, Security } from "@mui/icons-material";
import { Work, Create, Css, GridView, Collections } from "@mui/icons-material";
import {
  FontDownload,
  Palette,
  Pattern,
  MiscellaneousServices,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";
import { useEffect, useState } from "react";

export interface NavList {
  title: string;
  icon: JSX.Element;
}

const webDevelopment: NavList[] = [
  { title: "Authentication", icon: <LockPerson /> },
  { title: "Deployment", icon: <Rocket /> },
  { title: "Frameworks", icon: <Code /> },
  { title: "Cloud Providers", icon: <Cloud /> },
  { title: "Databases", icon: <Storage /> },
  { title: "Analytics", icon: <Analytics /> },
  { title: "Images", icon: <ImageIcon /> },
  { title: "Security", icon: <Security /> },
  { title: "BaaS", icon: <Work /> },
];
const design = [
  { title: "illustrator", icon: <Create /> },
  { title: "CSS", icon: <Css /> },
  { title: "Icons", icon: <GridView /> },
  { title: "Stock Photos", icon: <Collections /> },
  { title: "Fonts", icon: <FontDownload /> },
  { title: "Colors", icon: <Palette /> },
  { title: "Pattern", icon: <Pattern /> },
  { title: "Miscellaneous", icon: <MiscellaneousServices /> },
];

const drawerWidth = 230;

export default function SideBar() {
  const theme = useTheme();
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

  const drawer = (
    <div>
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
            sx={{ backgroundColor: " #002744" }}
          >
            Web Development
          </ListSubheader>
        }
      >
        {webDevelopment.map((item) => (
          <ListItem key={item.title} dense disablePadding>
            <ListItemButton>
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
            sx={{ backgroundColor: " #002744" }}
          >
            UI/UX Design
          </ListSubheader>
        }
      >
        {design.map((item) => (
          <ListItem key={item.title} dense disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
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
