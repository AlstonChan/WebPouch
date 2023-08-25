// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import Head from "next/head";

import { ReactElement } from "react";
import { navBarList } from "data/toolsRoute";
import { toLink } from "data/toolsItemDetails";
// MaterialUI Import
import { Box, Typography } from "@mui/material";
import { List, ListItem } from "@mui/material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

import ToolsLayout from "@/components/ToolsLayout";
import ToolsMobileStepper from "@/components/tools/ToolsMobileStepper";

// type import
import type { NavList } from "data/types";
import type { NavBarListType } from "data/toolsRoute";

export default function Tools() {
  const theme = useTheme();

  // styling
  const PageTitleStyle: SxProps<Theme> = {
    fontFamily: theme.typography.fontTitle,
  };
  const PageDescStyle: SxProps<Theme> = {
    mt: theme.spacing(1.5),
    lineHeight: "2rem",
    maxWidth: 1200,
    fontSize: {
      md: theme.typography.h6.fontSize,
      xs: theme.typography.body1.fontSize,
    },
  };
  const ListStyle: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: { md: "repeat(2, 1fr)", xs: "1fr" },
    rowGap: theme.spacing(0.5),
  };
  const ListTitleStyle: SxProps<Theme> = {
    ...PageTitleStyle,
    mb: theme.spacing(-0.5),
    mt: theme.spacing(2),
  };
  const ListItemStyle: SxProps<Theme> = {
    "&:nth-child(odd)": {
      pr: { md: theme.spacing(2.8), xs: 0 },
    },
  };
  const ListItemBtnStyle: SxProps<Theme> = {
    py: theme.spacing(1.5),
    my: theme.spacing(0.8),
    border: `1px solid ${theme.palette.secondary.dark}`,
    borderRadius: theme.spacing(1),
    backgroundColor: blue[800],
    transition: "box-shadow 160ms ease-in-out",
    "&:hover": {
      backgroundColor: blue[900],
      boxShadow: "0px 4px 31px -12px rgba(2, 136, 209, 0.75)",
      transition:
        "box-shadow 200ms ease-in-out, background-color 200ms ease-in-out",
    },
  };
  const ListItemTextStyle: SxProps<Theme> = {
    ".MuiListItemText-primary": {
      fontSize: theme.typography.h6.fontSize,
    },
  };

  return (
    <>
      <Head>
        <title>Tools - WebPouch</title>
        <meta name="title" content="Tools - WebPouch" key="title" />
        <meta
          name="description"
          content="WebPouch is a platform for web developers to easily access and compare different cloud services such as PaaS, IaaS, and DaaS. Its focus on free-tier services makes it an ideal tool for developers on a budget."
        />
      </Head>

      <Typography component="h1" variant="h3" sx={PageTitleStyle}>
        Tools
      </Typography>
      <Typography paragraph sx={PageDescStyle}>
        In this section, you will find an array of tools, services, and products
        that can be incorporated into your projects. All the resources offered
        here are either completely free or have a free tier that lasts for at
        least 12 months, ensuring that you can make the most out of them without
        any additional expenses.
      </Typography>

      {navBarList.map((category: NavBarListType) => {
        return (
          <Box key={category.title}>
            <Typography component="h2" variant="h4" sx={ListTitleStyle}>
              {category.title}
            </Typography>
            <List sx={ListStyle}>
              {category.data.map((item: NavList) => {
                return (
                  <ListItem
                    key={item.title}
                    dense
                    disablePadding
                    sx={ListItemStyle}
                  >
                    <ListItemButton
                      sx={ListItemBtnStyle}
                      href={toLink(item.title)}
                    >
                      <ListItemIcon sx={{ minWidth: "42px" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.title}
                        sx={ListItemTextStyle}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        );
      })}

      <ToolsMobileStepper query={"tools"} />
    </>
  );
}

Tools.getLayout = (page: ReactElement) => {
  return <ToolsLayout>{page}</ToolsLayout>;
};
