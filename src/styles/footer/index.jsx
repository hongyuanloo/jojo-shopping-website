import { Link } from "react-router-dom";
import { Box, List, styled, Typography, Grid, Button } from "@mui/material";
import { Colors } from "../theme";

export const FooterContainer = styled(Box)(({ theme }) => ({
  fontSize: "14px",
  padding: "64px",
  background: "lightblue",
  color: "white",
  [theme.breakpoints.down("md")]: { fontSize: "12px", padding: "64px 32px" },
}));

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: 1.5,
  margin: "1em 0",
}));

export const FooterLink = styled(Link)({
  textDecoration: "none",
  color: "white",
});

export const FooterText = styled(Typography)({
  fontWeight: 400,
  fontSize: "0.875rem",
  lineHeight: 2,
  letterSpacing: "0.033em",
  color: "white",
});

export const ListContainer = styled(List)({
  padding: 0,
});

export const GridItemContainer = styled(Grid)({
  textAlign: { sm: "left", xs: "center" },
});

export const SubscribeButton = styled(Button)(() => ({
  textTransform: "uppercase",
  fontSize: 13,
  padding: "6px 12px",
  lineHeight: 1.75,
  backgroundColor: Colors.standardButton.backgroundColor,
  color: Colors.standardButton.color,

  "&:hover": {
    backgroundColor: Colors.standardButton.hover.backgroundColor,
  },
}));
