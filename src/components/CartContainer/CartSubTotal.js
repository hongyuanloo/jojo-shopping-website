import { Typography, styled, Grid } from "@mui/material";

export default function CartSubTotal({ totalPrice }) {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: theme.typography.caption.fontSize,
  }));

  return (
    <Grid container spacing={0} p={2} sx={{ justifyContent: "flex-end" }}>
      <Grid item sx={{ textAlign: "right" }}>
        <StyledTypography
          component="span"
          sx={{ fontSize: "11px", paddingRight: 3 }}
        >
          Subtotal
        </StyledTypography>
        <StyledTypography component="span" sx={{ fontSize: "13px" }}>
          {`SGD ${totalPrice}.00`}
        </StyledTypography>
      </Grid>
    </Grid>
  );
}
