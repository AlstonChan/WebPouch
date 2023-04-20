import { Box, Container } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";
import { MoneyOff, GitHub, Difference } from "@mui/icons-material";

import SectionTitle from "../../common/SectionTitle";
import FeatureBox from "./FeatureBox";

export interface Features {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Features[] = [
  {
    icon: <Difference fontSize="large" />,
    title: "One-stop-shop",
    description:
      "Entripel is a one-stop-shop for web developers, offering them a single platform to discover and compare various cloud services from multiple providers, so you can make informed decisions based on your specific project requirements.",
  },
  {
    icon: <MoneyOff fontSize="large" />,
    title: "Focused on Free tier",
    description:
      "Our platform is tailored for web developers on a budget, providing them with a comprehensive range of cloud services and tools at no cost or at low prices.",
  },
  {
    icon: <GitHub fontSize="large" />,
    title: "Open source on GitHub",
    description:
      "This is an open-source project, which means its code is freely available for developers to access, modify, and customize according to their needs.",
  },
];

export default function HomeFeatures() {
  const theme = useTheme();

  const containerStyles: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    my: {
      lg: theme.spacing(12),
      md: theme.spacing(8),
      xs: theme.spacing(12),
    },
  };
  const featuresContainerStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: { md: "row", xs: "column" },
    gap: theme.spacing(2),
  };
  const boxContainerStyle: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    p: theme.spacing(1.5),
    maxWidth: "500px",
    mx: "auto",
  };

  return (
    <Container sx={containerStyles} maxWidth="xl">
      <SectionTitle text="Features" sx={{ mx: "auto" }} />
      <Box sx={featuresContainerStyle}>
        {features.map((feature, index) => {
          return (
            <Box sx={boxContainerStyle} key={index}>
              <FeatureBox data={feature} />
            </Box>
          );
        })}
      </Box>
    </Container>
  );
}
