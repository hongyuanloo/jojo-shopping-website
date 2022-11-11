import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import {
  RightContainer,
  NavReactLink,
  NavText,
} from "../../styles/navigationBar";
import LoginIconButton from "./LoginIconButton";
import { Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import SearchContainer from "./Search";

export default function RightBar() {
  const { cart, setCart } = useContext(CartContext);
  const { currentUser } = useContext(AuthContext);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setCart({
          items: [],
          totalQuantity: 0,
          totalPrice: 0,
        });
      })
      .catch((error) => {
        console.log("sign out error: ", error.message);
      });
  };
  const LogoutButton = () => {
    return (
      <Button onClick={handleClick}>
        <NavText>LOGOUT</NavText>
      </Button>
    );
  };

  return (
    <RightContainer>
      <SearchContainer />

      {!currentUser && <LoginIconButton />}

      <NavReactLink to="/cart">
        <IconButton aria-label="add cart">
          <Badge badgeContent={cart.totalQuantity} color="secondary">
            <ShoppingCartIcon
              sx={{ fontSize: { xs: "1.4rem", sm: "1.4rem", md: "1.5rem" } }}
            />
          </Badge>
        </IconButton>
      </NavReactLink>

      {currentUser && <LogoutButton />}
    </RightContainer>
  );
}
