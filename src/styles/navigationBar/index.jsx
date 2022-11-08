import { styled, Toolbar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Colors } from "../theme";

export const NavToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const LeftContainer = styled(Box)({
  display: "flex",
  gap: "40px",
  alignItems: "center",
});

export const NavText = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: Colors.text,
  fontWeight: 500,
  lineHeight: 1.57,
  letterSpacing: "0.00714em",
  //  follow settings for variant="subtitle2"
  [theme.breakpoints.down("md")]: { fontSize: "0.9rem" },
}));

export const NavReactLink = styled(Link)({
  textDecoration: "none",
});

export const NavLogoText = styled(Typography)(({ theme }) => ({
  color: Colors.text,
  [theme.breakpoints.down("md")]: { fontSize: "1.1rem" },
}));

export const RightContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});
