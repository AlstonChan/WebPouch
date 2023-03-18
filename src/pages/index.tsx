import Thur from "@/../public/home/thur.png";

import Head from "next/head";

import { Box } from "@mui/material";

import NavBar from "@/components/navbar/NavBar";
import HomeHero from "@/components/home/hero/Hero";

export default function Home() {
  const thurBackgroundStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    mt: { md: 0, xs: 0 },
    width: { md: "42%", xs: "100%" },
    height: {
      lg: "100vh",
      md: `calc(700px + calc(68.5px + 8px) )`,
      xs: 0,
    },
    display: "flex",
    alignItems: "center",
    backgroundImage: `url(${Thur.src})`,
    backgroundSize: "100%",
    opacity: 0.7,
    borderRadius: "0 0 0 100px",
  };

  return (
    <>
      <Head>
        <title>Devtools</title>
        <meta name="title" content="Devtools" key="title" />
        <meta
          name="description"
          content="A collection of web development tools"
        />
      </Head>
      {/* Left side */}
      <Box sx={{ position: "relative", zIndex: -1 }}>
        {/* Thur Background */}
        <Box sx={thurBackgroundStyle} />
      </Box>
      <NavBar />

      {/* Right side */}
      <HomeHero />
    </>
  );
}
