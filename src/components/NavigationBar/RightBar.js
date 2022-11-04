import { Box, styled, Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function RightBar() {
  const { cart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const RightBar = styled(Box)({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  });

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // console.log("sign OUT success");
        // Sign-out successful.
      })
      .catch((error) => {
        // console.log("sign OUT error: ", error.message);
        // An error happened.
      });
  };
  const LogoutButton = () => {
    return (
      <Button onClick={handleClick}>
        <Typography variant="subtitle2" color="text.secondary">
          LOGOUT
        </Typography>
      </Button>
    );
  };

  const LoginIcon = () => {
    return (
      <Link to="/login">
        <IconButton aria-label="login">
          <PersonIcon fontSize="medium" />
        </IconButton>
      </Link>
    );
  };

  return (
    <RightBar>
      <IconButton aria-label="search">
        <SearchIcon fontSize="medium" />
      </IconButton>
      {!currentUser && <LoginIcon />}
      <Link to="/cart">
        <IconButton aria-label="add cart">
          <Badge badgeContent={cart.totalQuantity} color="secondary">
            <ShoppingCartIcon fontSize="medium" />
          </Badge>
        </IconButton>
      </Link>
      {currentUser && <LogoutButton />}
    </RightBar>
  );
}
