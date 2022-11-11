import { styled, Button, Typography, Stack } from "@mui/material";
import { Colors } from "../theme";

export const CartButtons = styled(Button)(() => ({
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

export const TitleContainer = styled(Typography)(({ theme }) => ({
  color: Colors.text,
  fontWeight: 500,
  lineHeight: 1.57,
  letterSpacing: "0.00714em",
  fontSize: "0.9rem",
  [theme.breakpoints.down("sm")]: { fontSize: "0.8rem" },
}));

export const TextContainer = styled(Typography)(({ theme }) => ({
  color: Colors.text,
  fontWeight: 400,
  lineHeight: 1.43,
  letterSpacing: "0.01071em",
  fontSize: "0.85rem",
  [theme.breakpoints.down("sm")]: { fontSize: "0.75rem" },
}));

export const SubtotalContainer = styled(Typography)(({ theme }) => ({
  color: Colors.text,
  fontWeight: 400,
  lineHeight: 1.43,
  letterSpacing: "0.01071em",
  fontSize: "0.75rem",
  [theme.breakpoints.down("sm")]: { fontSize: "0.65rem" },
}));

export const ItemContainer = styled(Stack)(() => ({
  alignItems: "flex-start",
  gap: "1rem",
  flexDirection: "row",
}));
