import {
  Card,
  styled,
  Box,
  Stack,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

export default function ProductCard(props) {
  const { title, price, images } = props.product;

  const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: theme.typography.caption.fontSize,
  }));

  return (
    <Card sx={{ maxWidth: { xs: 400, md: 287 }, minWidth: { md: 190 } }} p={2}>
      {/* <CardActionArea> */}
      <Box
        sx={{
          // border: "2px solid purple",
          position: "relative",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          // height="300"
          image={images[0]}
          sx={{ borderRadius: "4px" }}
        />

        <Stack
          spacing={0}
          p={1}
          sx={{ position: "absolute", bottom: "0", width: "80%" }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              opacity: 0.6,
              ":hover": { opacity: 1.0 },
            }}
          >
            <StyledTypography>VIEW OPTIONS</StyledTypography>
          </Button>
        </Stack>
      </Box>

      {/* sx={{ backgroundColor: "lightblue" }} */}
      <CardContent>
        <StyledTypography> {title}</StyledTypography>
        <StyledTypography> {`$ ${price}`}</StyledTypography>
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
}
