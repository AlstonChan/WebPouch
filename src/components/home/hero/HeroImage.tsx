// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import ProductStructure from "@/public/home/product/product.png";
import ProductStructureWebp from "@/public/home/product/product.webp";
import thur from "@/public/home/thur.svg";

import Image from "next/image";

import { Box } from "@mui/material";
import { Theme, SxProps } from "@mui/material/styles";

import type { CSSProperties } from "react";

export default function HeroImage() {
  const imageContainerStyle: SxProps<Theme> = {
    flex: { md: "1 1 40%", xs: 0 },
    display: "flex",
    alignItems: "center",
    pX: { md: 0, sm: 6, xs: 0 },
    position: "relative",
  };

  const thurBackgroundStyle: SxProps<Theme> = {
    position: "absolute",
    right: 0,
    top: 0,
    width: { md: 0, xs: "100%" },
    height: "95%",
    opacity: 0.7,
  };

  const ImgStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "left bottom",
    borderRadius: "20px 20px 60px 60px",
  };

  return (
    <Box sx={imageContainerStyle}>
      <Box sx={thurBackgroundStyle}>
        <Image src={thur} alt="" style={ImgStyle} priority />
      </Box>
      {/* Product Structure image  */}
      <picture style={{ position: "relative" }}>
        <source srcSet={ProductStructureWebp.src} type="image/webp" />
        <Image
          src={ProductStructure}
          alt=""
          style={{
            width: "100%",
            height: "auto",
            zIndex: 1,
          }}
          priority
        />
      </picture>
    </Box>
  );
}
