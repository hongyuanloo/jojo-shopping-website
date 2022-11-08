import { createTheme } from "@mui/material";

export const Colors = {
  ///////////////
  //Background Color
  ///////////////
  background: "#F5F2EB",
  ///////////////
  // Text Color
  ///////////////
  text: "rgba(0,0,0,0.6)",
  ///////////////
  //Button Color
  ///////////////
  button: {
    color: "rgba(0,0,0)",
    opacity: "0.2",
    ":hover": { opacity: 0.4 },
  },
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const theme = createTheme({
  palette: {
    primary1: {
      main: "#fff",
      light: "#15c630",
    },

    otherColor: {
      main: "#1760a5",
    },
  },
});

export default theme;
