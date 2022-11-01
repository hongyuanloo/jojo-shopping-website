import {
  Typography,
  Stack,
  ListItem,
  Avatar,
  styled,
  Divider,
  Grid,
} from "@mui/material";

export default function CartItem({ cartItem }) {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: theme.typography.caption.fontSize,
  }));
  return (
    <>
      {/* sx={{ border: "3px dotted pink" }} */}
      <ListItem>
        <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
          <Grid item xs={6} md={6}>
            <Stack direction="row" spacing={2}>
              <Avatar
                variant="square"
                alt="Remy Sharp"
                sx={{ width: 60, height: 60 }}
                src={cartItem.image}
              />
              <Stack spacing={0} alignItems="flex-start" p={0}>
                <StyledTypography variant="subtitle2">
                  {cartItem.title}
                </StyledTypography>
                <StyledTypography variant="body2">
                  {`Category: ${cartItem.category}`}
                </StyledTypography>
                <StyledTypography variant="body2">
                  {`SGD: ${cartItem.price}.00`}
                </StyledTypography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={2} md={2}>
            <StyledTypography p={0} sx={{ fontSize: "13px" }}>
              {`Quantity : ${cartItem.quantity}`}
            </StyledTypography>
          </Grid>
          <Grid item xs={2} md={2} sx={{ textAlign: "right" }}>
            <StyledTypography p={0} sx={{ fontSize: "13px" }}>
              {`SGD ${cartItem.price * cartItem.quantity}.00`}
            </StyledTypography>
          </Grid>
        </Grid>
      </ListItem>
      <Divider />
    </>
  );
}
