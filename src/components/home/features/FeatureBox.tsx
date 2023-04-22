import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Features } from "data/home/features";

interface Props {
  data: Features;
}

export default function FeatureBox({ data }: Props) {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ mb: theme.spacing(1) }}>{data.icon} </Box>
      <Typography variant="h5" component="h3" sx={{ mb: theme.spacing(0.5) }}>
        {data.title}
      </Typography>
      <Typography
        sx={{ color: theme.palette.grey["A400"], fontSize: "1.1rem" }}
        paragraph
      >
        {data.description}
      </Typography>
    </>
  );
}
