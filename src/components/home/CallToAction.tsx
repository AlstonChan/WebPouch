// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import pattern1 from "@/public/home/patterns/asset1.png";
import pattern2 from "@/public/home/patterns/asset2.png";
import pattern3 from "@/public/home/patterns/asset3.png";
import pattern4 from "@/public/home/patterns/asset4.png";
import pattern5 from "@/public/home/patterns/asset5.png";
import leaf from "@/public/home/patterns/leaf.svg";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";

import { CSSProperties } from "react";
// MaterialUI Import
import { Container, Button, Box } from "@mui/material";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

export default function HomeCallToAction() {
  const theme = useTheme();
  const router = useRouter();
  const matches = useMediaQuery("(max-width:580px)");

  const floatingPatterns: { link: StaticImageData; css: CSSProperties }[] = [
    { link: pattern1, css: { top: `${matches ? "-5%" : "-13%"}` } },
    { link: pattern2, css: { width: "25%", bottom: 0 } },
    {
      link: pattern3,
      css: {
        bottom: "40%",
        right: "-2%",
        width: "13%",
        transform: "rotate(-70deg)",
      },
    },
    { link: pattern4, css: { left: "0", top: `${matches ? "-5%" : "-13%"}` } },
    { link: pattern5, css: { bottom: 0, left: "0", width: "25%" } },
  ];

  // styling
  const containerStyles: SxProps<Theme> = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: {
      lg: "500px",
      md: "400px",
      xs: "280px",
    },
    mt: {
      lg: theme.spacing(12),
      md: theme.spacing(8),
      xs: theme.spacing(12),
    },
    backgroundColor: "#15616D",
    overflow: "visible",
  };
  const decoContainerStyle: SxProps<Theme> = {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    mx: "auto",
    overflowX: "clip",
    overflowY: "visible",
  };
  const decoContainerBackgroundStyle: SxProps<Theme> = {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${leaf.src})`,
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    opacity: " 0.5",
  };
  const floatingAssetCss: CSSProperties = {
    position: "absolute",
    right: 0,
    width: "20%",
    height: "auto",
    maxWidth: "300px",
  };
  const mainTextStyle: SxProps<Theme> = {
    mb: 2,
    fontSize: {
      lg: theme.typography.h3.fontSize,
      sm: theme.typography.h4.fontSize,
      xs: theme.typography.h5.fontSize,
    },
    maxWidth: {
      lg: "880px",
      sm: "600px",
      xs: "400px",
    },
    alignSelf: "center",
    textAlign: "center",
    zIndex: 4000,
  };

  // tsx return statement
  return (
    <Container maxWidth={false} sx={containerStyles}>
      <Typography component="h2" variant="h3" sx={mainTextStyle}>
        Make informed cloud service decisions with WebPouch
      </Typography>
      <Button
        variant="contained"
        disableElevation
        color="primary"
        size="large"
        sx={{ width: "fit-content", mx: "auto", zIndex: 4000 }}
        onClick={() => router.push("/tools")}
      >
        Get started
      </Button>
      <Box sx={decoContainerStyle}>
        <Box sx={decoContainerBackgroundStyle} />
        {floatingPatterns.map((image, index) => {
          return (
            <Image
              src={image.link}
              style={{ ...floatingAssetCss, ...image.css }}
              alt=""
              key={index}
            />
          );
        })}
      </Box>
    </Container>
  );
}
