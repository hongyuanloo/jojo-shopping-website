import { Box, Stack, styled, Typography } from "@mui/material";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Link } from "react-router-dom";

export default function LeftBar() {
  const LeftBar = styled(Box)({
    display: "flex",
    gap: "40px",
    alignItems: "center",
  });

  const StyleTypography = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.secondary,
  }));

  return (
    <LeftBar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Stack direction="row" alignItems="center" gap="5px" px={3} py={4}>
          <AcUnitIcon color="primary" fontSize="large" />
          <Typography variant="h6" color="text.secondary">
            LOGO
          </Typography>
        </Stack>
      </Link>
      <Stack
        direction="row"
        spacing={4}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <StyleTypography>Home</StyleTypography>
        <StyleTypography>Shop</StyleTypography>
        <StyleTypography>About Us</StyleTypography>
      </Stack>
      <Stack
        direction="row"
        spacing={4}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <StyleTypography>Intentional hidden...</StyleTypography>
      </Stack>
    </LeftBar>
  );
}
