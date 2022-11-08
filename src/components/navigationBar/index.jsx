import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import { NavToolbar } from "../../styles/navigationBar";
import { AppBar } from "@mui/material";

export default function NavigationBar() {
  return (
    <AppBar
      position="sticky"
      sx={{ color: "primary.dark", backgroundColor: "#fff" }}
    >
      <NavToolbar>
        <LeftBar />
        <RightBar />
      </NavToolbar>
    </AppBar>
  );
}
