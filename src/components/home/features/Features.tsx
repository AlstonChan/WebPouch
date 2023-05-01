// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import { Box, Container } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

import SectionTitle from "@/components/common/SectionTitle";
import FeatureBox from "./FeatureBox";
import { features } from "data/home/features";

export default function HomeFeatures() {
  const theme = useTheme();

  // styling
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

  // tsx return statement
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
