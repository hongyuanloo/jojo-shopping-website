import { Box, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";

export default function RightBar() {
  const { cart } = useContext(CartContext);

  const RightBar = styled(Box)({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  });

  return (
    <RightBar>
      <IconButton aria-label="search">
        <SearchIcon fontSize="medium" />
      </IconButton>
      <IconButton aria-label="login">
        <PersonIcon fontSize="medium" />
      </IconButton>
      <Link to="/cart">
        <IconButton aria-label="add cart">
          <Badge badgeContent={cart.totalQuantity} color="secondary">
            <ShoppingCartIcon fontSize="medium" />
          </Badge>
        </IconButton>
      </Link>
    </RightBar>
  );
}
