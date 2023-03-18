import illustration from "@/../public/home/about.png";

import Image from "next/image";

import { Box, Container, Typography } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

import SectionTitle from "../common/SectionTitle";

export default function HomeAbout() {
  const theme = useTheme();

  const containerStyles: SxProps<Theme> = {
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    my: {
      lg: theme.spacing(12),
      md: theme.spacing(8),
      xs: theme.spacing(12),
    },
  };

  const flexLeftStyle: SxProps<Theme> = {
    flex: "1 1 60%",
  };
  const bodyStyle: SxProps<Theme> = {
    textIndent: "35px",
    fontSize: {
      lg: theme.typography.h6.fontSize,
      md: theme.typography.body1.fontSize,
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

  return (
    <Container sx={containerStyles} maxWidth="xl">
      <Box sx={flexLeftStyle}>
        <SectionTitle text="What is Entripel" />
        <Typography paragraph variant="h6" sx={bodyStyle}>
          Entripel is a comprehensive platform that offers web developers a
          collection of web development tools and services, such as PaaS, BaaS,
          Identity-as-a-service, and more. We provide developers to discover a
          wide range of services from different providers, allowing them to
          easily compare and contrast different options easily.
        </Typography>
        <br />
        <Typography paragraph variant="h6" sx={bodyStyle}>
          Our focus on free-tier services makes it an ideal tool for developers
          on a budget. The platform's user-friendly interface enables developers
          to view and compare different services based on various criteria such
          as pricing, features, and support, helping them in making informed
          decisions based on their specific project requirements.
        </Typography>
      </Box>
      <Box sx={flexRightStyle}>
        <Image
          src={illustration}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Container>
  );
}
