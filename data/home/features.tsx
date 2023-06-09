// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import { MoneyOff, GitHub, Difference } from "@mui/icons-material";

export interface Features {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const features: Features[] = [
  {
    icon: <MoneyOff fontSize="large" />,
    title: "Focused on Free tier",
    description:
      "All the tools, services and products listed at here will be free of cost or have a free tier that is at least 12 month long. You don’t have to jump around those services to check their free tier information, we did it for you.",
  },
  {
    icon: <GitHub fontSize="large" />,
    title: "Open source on GitHub",
    description:
      "This platform is open-sourced, anyone that have found a services with a free tier can add the services to our list, so you don’t miss any.",
  },
  {
    icon: <Difference fontSize="large" />,
    title: "Your One-stop-shop",
    description:
      "WebPouch is a one-stop-shop for web developers, discover and compare various services in a platform , and make informed decisions based on your specific project requirements.",
  },
];
