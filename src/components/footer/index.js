import {
  Box,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { FooterContainer, FooterTitle } from "../../styles/footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <FooterContainer>
      <Grid container spacing={2} justifyContent="center">
        <Grid item sm={6} md={4}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris a
            diam maecenas sed enim ut.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <GitHubIcon />
            <EmailIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
        </Grid>
        <Grid item sm={6} md={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item sm={6} md={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item sm={6} md={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <TextField
              color="primary"
              label="Email address"
              variant="standard"
              sx={{
                ".MuiInputLabel-root": { fontSize: "0.8em", color: "grey" },
                ".MuiInputBase-input": { fontSize: "0.8em" },
              }}
            ></TextField>
            <Button
              startIcon={<SendIcon sx={{ color: "white" }} />}
              sx={{ mt: 2, mb: 4, fontSize: "0.8em" }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </FooterContainer>
  );
}
