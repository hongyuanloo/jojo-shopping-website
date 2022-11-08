import { NavReactLink } from "../../styles/navigationBar";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";

export default function LoginIconButton() {
  return (
    <NavReactLink to="/login">
      <IconButton aria-label="login">
        <PersonIcon
          sx={{ fontSize: { xs: "1.4rem", sm: "1.4rem", md: "1.5rem" } }}
        />
      </IconButton>
    </NavReactLink>
  );
}
