import {
  LeftContainer,
  NavText,
  NavReactLink,
  NavLogoText,
} from "../../styles/navigationBar";
import { Stack } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

export default function LeftBar() {
  return (
    <LeftContainer>
      <NavReactLink to="/">
        <Stack direction="row" alignItems="center" gap="5px" px={0} py={4}>
          <EmojiEmotionsIcon
            color="primary"
            sx={{ fontSize: { xs: "1.8rem", sm: "1.8rem", md: "2rem" } }}
          />
          <NavLogoText variant="h6">Jojo</NavLogoText>
        </Stack>
      </NavReactLink>
      <Stack
        direction="row"
        spacing={4}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <NavReactLink to="/home">
          <NavText>Home</NavText>
        </NavReactLink>
        <NavReactLink to="/shop">
          <NavText>Shop</NavText>
        </NavReactLink>
        {/* <NavText>About Us</NavText> */}
      </Stack>
    </LeftContainer>
  );
}
