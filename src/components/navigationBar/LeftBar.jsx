import {
  LeftContainer,
  NavText,
  NavReactLink,
  NavLogoText,
} from "../../styles/navigationBar";
import { Stack } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function LeftBar() {
  return (
    <LeftContainer>
      <NavReactLink to="/">
        <Stack direction="row" alignItems="center" gap="5px" px={3} py={4}>
          <AcUnitIcon
            color="primary"
            sx={{ fontSize: { xs: "1.8rem", sm: "1.8rem", md: "2rem" } }}
          />
          <NavLogoText variant="h6">LOGO</NavLogoText>
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
        <NavText>About Us</NavText>
        {/* <NavReactLink to="/test">
          <NavText>Test</NavText>
        </NavReactLink> */}
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavText>Intentional hidden...</NavText>
      </Stack>
    </LeftContainer>
  );
}
