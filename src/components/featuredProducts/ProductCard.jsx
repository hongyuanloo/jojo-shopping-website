import { ProductText } from "../../styles/featuredProducts";
import { Colors } from "../../styles/theme";
import {
  Card,
  Box,
  Stack,
  CardContent,
  CardMedia,
  IconButton,
} from "@mui/material";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

export default function ProductCard({ product, cart, setCart }) {
  const { title, price, images, category } = product;

  const handleClick = function () {
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
    <Card sx={{ maxWidth: { xs: 450 } }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          alt={`image of ${title}`}
          // temporary use categorg image, if there is no images provided
          image={images[0] === "" ? category.image : images[0]}
          sx={{ borderRadius: "4px" }}
        />

        <Stack
          spacing={0}
          p={1}
          sx={{ position: "absolute", top: "0", left: "0" }}
        >
          <IconButton aria-label="add to cart" onClick={handleClick}>
            <AddCircleOutlinedIcon
              sx={{ fontSize: "3rem", color: Colors.button }}
            />
          </IconButton>
        </Stack>
      </Box>

      <CardContent>
        <ProductText> {title}</ProductText>
        <ProductText> {`$ ${price}`}</ProductText>
      </CardContent>
    </Card>
  );
}
