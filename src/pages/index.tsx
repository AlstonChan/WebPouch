// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import Thur from "@/public/home/thur.svg";

import Image from "next/image";
import Head from "next/head";

import { Box } from "@mui/material";
import { Theme, SxProps } from "@mui/material/styles";

import NavBar from "@/components/common/navbar/NavBar";
import HomeHero from "@/components/home/hero/Hero";
import HomeAbout from "@/components/home/About";
import HomeFeatures from "@/components/home/features/Features";
import HomeCallToAction from "@/components/home/CallToAction";
import Footer from "@/components/common/footer/Footer";

import type { CSSProperties } from "react";

export default function Home() {
  let navBarHeight = "calc(81px + 8px)";

  // styling
  const thurBackgroundStyle: SxProps<Theme> = {
    position: "absolute",
    top: `calc(20px + ${navBarHeight})`,
    right: 0,
    width: { lg: "44%", md: "39%", xs: "100%" },
    height: {
      lg: `calc(800px - ${navBarHeight})`,
      md: `calc(600px - ${navBarHeight})`,
      xs: 0,
    },
    opacity: 0.7,
  };

  const ImgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "left bottom",
    borderRadius: "40px 60px",
  };

  // tsx return statement
  return (
    <>
      <Head>
        <title>WebPouch</title>
        <meta name="title" content="WebPouch" key="title" />
        <meta
          name="description"
          content="WebPouch is a platform for web developers to easily access and compare different services such as PaaS, BaaS, web hosting platform. We primarily focus on the free-tier services provided, so for developers tha is on a budget should find this helpful"
        />
      </Head>
      {/* Left side */}
      {/* Thur Background */}
      <Box sx={thurBackgroundStyle}>
        <Image src={Thur} alt="" style={ImgStyle} priority />
      </Box>
      <NavBar />

      {/* Right side */}
      <HomeHero />
      <HomeAbout />
      <HomeFeatures />
      <HomeCallToAction />

      <Footer />
    </>
  );
}
