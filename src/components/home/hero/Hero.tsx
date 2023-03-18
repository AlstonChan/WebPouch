import { Box, Typography, Container, Button } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

import HeroImage from "./HeroImage";

export default function HomeHero() {
  const theme = useTheme();

  const containerStyle: SxProps<Theme> = {
    display: "flex",
    alignItems: "center",
    minHeight: {
      lg: `calc(100vh - calc(68.5px + ${theme.spacing(1)}) )`,
      md: "700px",
      xs: "none",
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
    fontSize: {
      md: theme.typography.h2.fontSize,
      sm: theme.typography.h3.fontSize,
      xs: theme.typography.h4.fontSize,
    },
    maxWidth: { md: "none", sm: "600px", xs: "300px" },
    mx: { lg: 0, xs: "auto" },
  };

  const subtitleStyle: SxProps<Theme> = {
    color: theme.palette.grey["A400"],
    mt: 1,
    fontSize: {
      sm: theme.typography.h6.fontSize,
      xs: theme.typography.subtitle1.fontSize,
    },
    maxWidth: { md: "none", sm: "550px", xs: "400px" },
  };

  return (
    <Container maxWidth="xl" sx={containerStyle}>
      {/* Flex 1, first half  */}
      <Box sx={flexLeftStyle}>
        {/* Title  */}
        <Typography variant="h1" sx={titleStyle}>
          Discover Web Dev Tools
        </Typography>

        {/* Subtitle  */}
        <Typography variant="h5" paragraph sx={subtitleStyle}>
          Accelerate Your Web Dev Workflow with a curated list of useful tools.
          Discover a plethora of site and products to enhance your developer
          experience.
        </Typography>
        <br />

        {/* Call to action button  */}
        <Button
          color="secondary"
          size="large"
          variant="contained"
          sx={{ mt: 2, mr: { md: "auto", xs: 0 } }}
        >
          Browse tools
        </Button>
      </Box>

      {/* Flex 1, second half  */}
      <HeroImage />
    </Container>
  );
}
