import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { ReactNode } from "react";

import SideBar from "@/components/common/SideBar";

interface Props {
  children: ReactNode;
}

export default function ToolsLayout({ children }: Props) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Container maxWidth="xl" sx={{ mt: theme.spacing(2) }}>
        {children}
      </Container>
    </Box>
  );
}
