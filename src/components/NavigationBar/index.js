import { Toolbar, AppBar, styled } from "@mui/material";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

export default function NavigationBar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <AppBar
      position="sticky"
      sx={{ color: "primary.dark", backgroundColor: "#fff" }}
    >
      <StyledToolbar>
        <LeftBar />
        <RightBar />
      </StyledToolbar>
    </AppBar>
  );
}
