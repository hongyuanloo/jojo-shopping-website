import {
  FooterContainer,
  FooterLink,
  FooterText,
  FooterTitle,
  GridItemContainer,
  ListContainer,
  SubscribeButton,
} from "../../styles/footer";
import {
  Box,
  Grid,
  ListItemText,
  Stack,
  Typography,
  TextField,
  IconButton,
  Tooltip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <FooterContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={6} md={4}>
          <FooterTitle>About Us</FooterTitle>
          <Typography variant="caption" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a
            diam maecenas sed enim ut.
          </Typography>
          <Box sx={{ my: 2, display: "flex", gap: 2 }}>
            <IconButton
              aria-label="GitHub Icon"
              href="https://github.com/hongyuanloo/shopping-website"
            >
              <GitHubIcon href="www.google.com" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn Icon"
              href="https://www.linkedin.com/in/hong-yuan-loo-815944a2/"
            >
              <LinkedInIcon />
            </IconButton>
            <Tooltip title="loohongyuan5505@hotmail.com">
              <IconButton>
                <EmailIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Grid>

        <GridItemContainer item sm={6} md={2}>
          <FooterTitle>Information</FooterTitle>
          <ListContainer sx={{ padding: 0 }}>
            <ListItemText>
              <FooterText> About Us</FooterText>
            </ListItemText>

            <ListItemText>
              <FooterText> Order Tracking</FooterText>
            </ListItemText>

            <ListItemText>
              <FooterText> Privacy &amp; Policy</FooterText>
            </ListItemText>

            <ListItemText>
              <FooterText> Terms &amp; Conditions</FooterText>
            </ListItemText>
          </ListContainer>
        </GridItemContainer>

        <GridItemContainer item sm={6} md={2}>
          <FooterTitle>my account</FooterTitle>
          <ListContainer>
            <ListItemText>
              <FooterLink to="/login">
                <FooterText>Login</FooterText>
              </FooterLink>
            </ListItemText>
            <ListItemText>
              <FooterLink to="/cart">
                <FooterText>My Cart</FooterText>
              </FooterLink>
            </ListItemText>
            <ListItemText>
              <FooterLink to="/createAccount">
                <FooterText>Create Account</FooterText>
              </FooterLink>
            </ListItemText>
          </ListContainer>
        </GridItemContainer>

        <GridItemContainer item sm={6} md={4}>
          <FooterTitle>newsletter</FooterTitle>
          <Stack>
            <TextField
              color="primary"
              label="Email address"
              variant="standard"
              sx={{
                ".MuiInputLabel-root": { fontSize: "0.9em", color: "grey" },
                ".MuiInputBase-input": { fontSize: "0.9em" },
              }}
            ></TextField>
            <SubscribeButton
              startIcon={<SendIcon sx={{ color: "white" }} />}
              sx={{ my: 2, fontSize: "0.9em" }}
            >
              Subscribe
            </SubscribeButton>
          </Stack>
        </GridItemContainer>
      </Grid>
    </FooterContainer>
  );
}
