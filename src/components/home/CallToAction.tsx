// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import pattern1 from "@/public/home/patterns/asset1.png";
import pattern1Webp from "@/public/home/patterns/asset1.webp";

import pattern2 from "@/public/home/patterns/asset2.png";
import pattern2Webp from "@/public/home/patterns/asset2.webp";

import pattern3 from "@/public/home/patterns/asset3.png";
import pattern3Webp from "@/public/home/patterns/asset3.webp";

import pattern4 from "@/public/home/patterns/asset4.png";
import pattern4Webp from "@/public/home/patterns/asset4.webp";

import pattern5 from "@/public/home/patterns/asset5.png";
import pattern5Webp from "@/public/home/patterns/asset5.webp";
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

  const floatingPatterns: {
    img: StaticImageData;
    webp: StaticImageData;
    css: CSSProperties;
  }[] = [
    {
      img: pattern1,
      webp: pattern1Webp,
      css: { top: `${matches ? "-5%" : "-13%"}` },
    },
    { img: pattern2, webp: pattern2Webp, css: { width: "25%", bottom: 0 } },
    {
      img: pattern3,
      webp: pattern3Webp,
      css: {
        bottom: "40%",
        right: "-2%",
        width: "13%",
        transform: "rotate(-70deg)",
      },
    },
    {
      img: pattern4,
      webp: pattern4Webp,
      css: { left: "0", top: `${matches ? "-5%" : "-13%"}` },
    },
    {
      img: pattern5,
      webp: pattern5Webp,
      css: { bottom: 0, left: "0", width: "25%" },
    },
  ];

  // styling
  const containerStyles: SxProps<Theme> = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: {
      lg: "400px",
      md: "300px",
      xs: "250px",
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
    fontFamily: theme.typography.fontTitle,
    fontSize: {
      lg: theme.typography.h3.fontSize,
      sm: theme.typography.h4.fontSize,
      xs: "1.7rem",
    },
    maxWidth: {
      lg: "700px",
      sm: "470px",
      xs: "300px",
    },
    mb: 2,
    alignSelf: "center",
    textAlign: "center",
    zIndex: 4000,
  };
  const buttonStyle: SxProps<Theme> = {
    width: "fit-content",
    mx: "auto",
    zIndex: 4000,
    fontFamily: theme.typography.fontTitle,
  };

  // tsx return statement
  return (
    <Container maxWidth={false} sx={containerStyles}>
      <Typography component="h2" variant="h3" sx={mainTextStyle}>
        Discover and compare services now
      </Typography>
      <Button
        variant="contained"
        disableElevation
        size="large"
        sx={buttonStyle}
        onClick={() => router.push("/tools")}
      >
        Get started
      </Button>
      <Box sx={decoContainerStyle}>
        <Box sx={decoContainerBackgroundStyle} />
        {floatingPatterns.map((image, index) => {
          return (
            <picture key={index}>
              <source srcSet={image.webp.src} type="image/webp" />
              <Image
                src={image.img}
                style={{ ...floatingAssetCss, ...image.css }}
                alt=""
              />
            </picture>
          );
        })}
      </Box>
    </Container>
  );
}
