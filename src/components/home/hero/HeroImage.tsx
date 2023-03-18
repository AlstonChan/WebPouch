import ProductStructure from "@/../public/home/product.png";
import Thur from "@/../public/home/thur.png";

import Image from "next/image";

import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export default function HeroImage() {
  const imageContainerStyle: SxProps<Theme> = {
    flex: { md: "1 1 50%", xs: 0 },
    display: "flex",
    alignItems: "center",
    pX: { md: 0, sm: 6, xs: 0 },
    position: "relative",
  };

  const thurBackgroundStyle: SxProps<Theme> = {
    position: "absolute",
    top: 0,

    width: { md: 0, xs: "100%" },
    height: "100%",

    backgroundImage: `url(${Thur.src})`,
    backgroundSize: "100%",
    opacity: 0.7,
    borderRadius: { sm: "0 0 100px 100px", xs: "0 0 40px 40px" },
  };

  return (
    <Box sx={imageContainerStyle}>
      <Box sx={thurBackgroundStyle} />
      {/* Product Structure image  */}
      <Image
        src={ProductStructure}
        alt=""
        style={{
          width: "100%",
          height: "auto",
          zIndex: 1,
        }}
      />
    </Box>
  );
}
