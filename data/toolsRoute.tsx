import { LockPerson, Rocket, Code, Cloud, Storage } from "@mui/icons-material";
import { Analytics, Image as ImageIcon, Security } from "@mui/icons-material";
import { Work, Create, Css, GridView, Collections } from "@mui/icons-material";
import {
  FontDownload,
  Palette,
  Pattern,
  MiscellaneousServices,
} from "@mui/icons-material";
import { NavList } from "./types";

export const webDevelopment: NavList[] = [
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
export const design: NavList[] = [
  { title: "Illustrator", icon: <Create /> },
  { title: "CSS", icon: <Css /> },
  { title: "Icons", icon: <GridView /> },
  { title: "Stock Photos", icon: <Collections /> },
  { title: "Fonts", icon: <FontDownload /> },
  { title: "Colors", icon: <Palette /> },
  { title: "Pattern", icon: <Pattern /> },
  { title: "Miscellaneous", icon: <MiscellaneousServices /> },
];
