// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

import { Typography } from "@mui/material";
import { useTheme, Theme, SxProps } from "@mui/material/styles";

interface Props {
  text: string;
  sx?: SxProps<Theme>;
}

export default function SectionTitle({ text, sx }: Props) {
  const theme = useTheme();
  const AdditionalSx = sx || null;

  const titleStyle: SxProps<Theme> = {
    mb: 2,
    fontSize: {
      lg: theme.typography.h3.fontSize,
      md: theme.typography.h4.fontSize,
      sm: theme.typography.h3.fontSize,
      xs: theme.typography.h4.fontSize,
    },
    ...AdditionalSx,
  };

  return (
    <Typography component="h2" variant="h3" sx={titleStyle}>
      {text}
    </Typography>
  );
}
