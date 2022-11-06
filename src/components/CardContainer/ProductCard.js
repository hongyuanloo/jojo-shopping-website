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

export default function ProductCard({ product, cart, setCart }) {
  const { title, price, images, category } = product;

  const StyledTypography = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontSize: theme.typography.caption.fontSize,
  }));

  const addCart = function () {
    const index = cart.items.findIndex((item) => {
      return item.title === title;
    });
    if (index !== -1) {
      //update existing item
      const cartItems = [...cart.items];
      cartItems[index].quantity++;
      setCart({
        ...cart,
        items: cartItems,
        totalQuantity: cart.totalQuantity + 1,
        totalPrice: cart.totalPrice + price,
      });
    } else {
      // add new item
      const newItem = {
        title: title,
        price: price,
        image: images[0],
        quantity: 1,
        category: category.name,
      };
      const newCartItems = [...cart.items, newItem];
      setCart({
        ...cart,
        items: newCartItems,
        totalQuantity: cart.totalQuantity + 1,
        totalPrice: cart.totalPrice + price,
      });
    }
  };

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
          // temporary use categor image, if there is no images provided
          image={images[0] === "" ? category.image : images[0]}
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
            onClick={addCart}
          >
            <StyledTypography>Add to Cart</StyledTypography>
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
