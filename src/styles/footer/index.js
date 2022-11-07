import { Box, styled, Typography } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  padding: "64px",
  background: "lightblue",
  color: "white",
  [theme.breakpoints.down("md")]: { fontSize: "12px", padding: "64px 32px" },
}));

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));
