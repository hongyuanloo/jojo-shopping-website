import { Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

export default function RightBar() {
  const RightBar = styled(Box)({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  });

  return (
    <RightBar>
      <SearchIcon fontSize="medium" />
      <PersonIcon fontSize="medium" />
      <Badge badgeContent={4} color="error">
        <ShoppingCartIcon fontSize="medium" />
      </Badge>
    </RightBar>
  );
}
