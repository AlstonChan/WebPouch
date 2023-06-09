// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import { useRouter } from "next/router";

import { Box, Typography, Container, Button } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

import HeroImage from "./HeroImage";

import type { CSSProperties } from "react";

export default function HomeHero() {
  const theme = useTheme();
  const router = useRouter();

  // styling
  const containerStyle: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    minHeight: {
      lg: "800px",
      md: "600px",
      xs: "500px",
    },
    flexDirection: { md: "row", xs: "column" },
    mb: { md: 0, sm: 4 },
  };
  const flexLeftStyle: SxProps<Theme> = {
    flex: { md: "1 2 50%", xs: 0 },
    pr: { lg: 6, md: 2, xs: 0 },
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    mt: { sm: 6, xs: 4 },
    mb: { sm: 6, xs: 4 },
    textAlign: { md: "left", xs: "center" },
  };
  const titleStyle: SxProps<Theme> = {
    fontFamily: theme.typography.fontTitle,
    fontSize: {
      lg: theme.typography.h2.fontSize,
      sm: theme.typography.h3.fontSize,
      xs: theme.typography.h4.fontSize,
    },
    maxWidth: { md: "700px", sm: "670px", xs: "none" },
    textAlign: { md: "left", xs: "center" },
    mx: { lg: 0, xs: "auto" },
    mr: { lg: "auto", xs: 0 },
    mb: { md: 0, xs: theme.spacing(2) },
  };
  const highLightStyle: CSSProperties = {
    color: theme.palette.highlight.main,
  };
  const subtitleStyle: SxProps<Theme> = {
    color: theme.palette.grey["A400"],
    mt: 1,
    fontSize: {
      lg: theme.typography.h5.fontSize,
      sm: theme.typography.h6.fontSize,
      xs: theme.typography.subtitle1.fontSize,
    },
    maxWidth: { md: "none", sm: "550px", xs: "400px" },
  };
  const buttonStyle: SxProps<Theme> = {
    mt: 2,
    mr: { md: "auto", xs: 0 },
    fontFamily: theme.typography.fontTitle,
  };

  // tsx return statement
  return (
    <Container maxWidth="xl" sx={containerStyle}>
      {/* Flex 1, first half  */}
      <Box sx={flexLeftStyle}>
        {/* Title  */}
        <Typography variant="h1" sx={titleStyle}>
          Development and deployment of{" "}
          <span style={highLightStyle}>hobby project</span> can be free,
          here&apos;s how.
        </Typography>

        {/* Subtitle  */}
        <Typography paragraph sx={subtitleStyle}>
          We have gather a list of tools, products and services that you, as a
          developer, can use without cost. Need a backend as a service for your
          hobby project? No worries, we got you here at WebPouch.
        </Typography>
        <br />

        {/* Call to action button  */}
        <Button
          color="secondary"
          size="large"
          variant="contained"
          sx={buttonStyle}
          onClick={() => router.push("/tools")}
        >
          Get Started
        </Button>
      </Box>

      {/* Flex 1, second half  */}
      <HeroImage />
    </Container>
  );
}
