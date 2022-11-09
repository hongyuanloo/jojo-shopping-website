import { styled, MenuItem, InputLabel, Select } from "@mui/material";
import { Colors } from "../theme";

export const MenuItemContainer = styled(MenuItem)(({ theme }) => ({
  color: Colors.text,
  fontSize: "1.0rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

export const InputLabelContainer = styled(InputLabel)(({ theme }) => ({
  color: Colors.text,
  fontSize: "1.0rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

export const SelectContainer = styled(Select)(({ theme }) => ({
  color: Colors.text,
  fontSize: "1.0rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));
