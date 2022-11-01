import { Box, Stack, Toolbar, AppBar, styled, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

export default function Test() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const LeftBar = styled(Box)({
    display: "flex",
    gap: "40px",
    alignItems: "center",
  });

  const RightBar = styled(Box)({
    display: "flex",
    gap: "20px",
    alignItems: "center",
  });

  const StyleTypography = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ color: "primary.dark", backgroundColor: "#fff" }}
      >
        <StyledToolbar>
          <LeftBar>
            <Stack direction="row" alignItems="center" gap="5px" px={3} py={4}>
              <AcUnitIcon color="primary" fontSize="large" />
              <StyleTypography>Home</StyleTypography>
              <Typography variant="h6" color="text.secondary">
                LOGO
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={4}
              justifyContent="flex-start"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Box>
                <StyleTypography>Home</StyleTypography>
              </Box>
              <Box>
                <StyleTypography>Shop</StyleTypography>
              </Box>
              <Box>
                <StyleTypography>About Us</StyleTypography>
              </Box>
            </Stack>
          </LeftBar>

          <RightBar>
            <SearchIcon fontSize="medium" />
            <PersonIcon fontSize="medium" />
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon fontSize="medium" />
            </Badge>
          </RightBar>
        </StyledToolbar>
      </AppBar>

      {/* <Stack
        direction="row"
        spacing={1}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Box bgcolor="pink" flex={2} p={2}>
          Home
        </Box>
        <Box bgcolor="lightblue" flex={4} p={2}>
          About Us
        </Box>
        <Box bgcolor="lightcoral" flex={2} p={2}>
          Shop
        </Box>
      </Stack> */}
    </>
  );
}
