import pattern1 from '@/../public/home/patterns/asset1.png`'

import Image from 'next/image'

import { Container, Button } from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

import SectionTitle from "../common/SectionTitle";

export default function HomeCallToAction() {
  const theme = useTheme();

  const containerStyles: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: {
      lg: "500px",
      md: "400px",
      xs: "300px",
    },
    my: {
      lg: theme.spacing(12),
      md: theme.spacing(8),
      xs: theme.spacing(12),
    },
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: "#15616D",
  };
  return (
    <Container maxWidth={false} sx={containerStyles}>
      <SectionTitle
        text="Make informed cloud service decisions with Entripel"
        sx={{ width: "880px", alignSelf: "center", textAlign: "center" }}
      />
      <Button
        variant="contained"
        disableElevation
        color="primary"
        size="large"
        sx={{ width: "fit-content", mx: "auto" }}
      >
        Get started
      </Button>
    </Container>
  );
}
