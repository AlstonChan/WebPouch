// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import { LockPerson, Rocket, Code, Cloud, Devices } from "@mui/icons-material";
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
  { title: "Web Hosting", icon: <Rocket /> },
  { title: "Frameworks", icon: <Code /> },
  { title: "Cloud Providers", icon: <Cloud /> },
  { title: "PaaS", icon: <Devices /> },
  { title: "BaaS", icon: <Work /> },
];
export const design: NavList[] = [
  { title: "Illustrator", icon: <Create /> },
  { title: "CSS", icon: <Css /> },
  { title: "Icons", icon: <GridView /> },
  { title: "Stock Photos", icon: <Collections /> },
  { title: "Fonts", icon: <FontDownload /> },
  { title: "Colors", icon: <Palette /> },
  { title: "Patterns", icon: <Pattern /> },
  { title: "Miscellaneous", icon: <MiscellaneousServices /> },
];

export type NavBarListType = { title: string; data: NavList[] };
export const navBarList: NavBarListType[] = [
  { title: "Web Development", data: webDevelopment },
  // { title: "UI/UX Design", data: design },
];
