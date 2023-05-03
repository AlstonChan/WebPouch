// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import { Box, Typography } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

import { Features } from "data/home/features";

interface Props {
  data: Features;
}

export default function FeatureBox({ data }: Props) {
  const theme = useTheme();

  const titleStyles: SxProps<Theme> = {
    fontFamily: theme.typography.fontTitle,
    mb: theme.spacing(0.5),
  };
  const descStyles: SxProps<Theme> = {
    color: theme.palette.grey["A400"],
    fontSize: "1.2rem",
  };

  return (
    <>
      <Box sx={{ mb: theme.spacing(1) }}>{data.icon} </Box>
      <Typography variant="h5" component="h3" sx={titleStyles}>
        {data.title}
      </Typography>
      <Typography sx={descStyles} paragraph>
        {data.description}
      </Typography>
    </>
  );
}
