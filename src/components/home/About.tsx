// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import illustration from "@/public/home/about/about.png";
import illustrationWebp from "@/public/home/about/about.webp";

import Image from "next/image";

import { Box, Container, Typography } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

import SectionTitle from "../common/SectionTitle";

export default function HomeAbout() {
  const theme = useTheme();

  // styling
  const containerStyles: SxProps<Theme> = {
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    my: {
      lg: theme.spacing(12),
      md: theme.spacing(8),
      xs: theme.spacing(12),
    },
  };
  const sectionLabelStyle: SxProps<Theme> = {
    fontFamily: theme.typography.fontTitle,
    color: theme.palette.highlight.main,
    fontSize: theme.typography.h6.fontSize,
  };
  const flexLeftStyle: SxProps<Theme> = {
    flex: "1 1 50%",
    alignSelf: "center",
  };
  const bodyStyle: SxProps<Theme> = {
    fontSize: {
      lg: theme.typography.h5.fontSize,
      sm: theme.typography.h6.fontSize,
      xs: theme.typography.body1.fontSize,
    },
  };
  const flexRightStyle: SxProps<Theme> = {
    flex: "1 1 40%",
    alignSelf: "center",
    px: { md: 0, sm: theme.spacing(10), xs: theme.spacing(1) },
    ml: theme.spacing(2),
  };

  // tsx return statement
  return (
    <Container sx={containerStyles} maxWidth="xl">
      <Box sx={flexLeftStyle}>
        <Typography sx={sectionLabelStyle}>About Us</Typography>
        <SectionTitle text="What is WebPouch" />
        <Typography paragraph variant="h6" sx={bodyStyle}>
          WebPouch is a platform that compiles information about free tier
          services and products, so you can pursue your hobby projects without
          having to spend money on subscription fees. We understand that finding
          such services can be a hassle, and that not everyone is willing or
          able to pay for the service. That's why we founded WebPouch - to help
          you find the best free tier offerings available.
        </Typography>
      </Box>
      <Box sx={flexRightStyle}>
        <picture>
          <source srcSet={illustrationWebp.src} type="image/webp" />
          <Image
            src={illustration}
            alt="Technology Illustration"
            style={{ width: "100%", height: "auto" }}
          />
        </picture>
      </Box>
    </Container>
  );
}
