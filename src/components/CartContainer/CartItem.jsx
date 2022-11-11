import {
  ItemContainer,
  TextContainer,
  TitleContainer,
} from "../../styles/cartContainer";
import IconButton from "@mui/material/IconButton";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Stack, ListItem, Avatar, Divider, Grid, Box } from "@mui/material";

export default function CartItem({ cartItem, cart, setCart }) {
  const ACTION = { ADD: "ADD", MINUS: "MINUS", DELETE: "DELETE" };

  function manageItem(action) {
    let index = cart.items.indexOf(cartItem);
    let newCartItems = [...cart.items];
    let currQty = newCartItems[index].quantity;

    switch (action) {
      case "ADD":
        newCartItems[index].quantity++;
        setCart({
          ...cart,
          items: newCartItems,
          totalQuantity: ++cart.totalQuantity,
          totalPrice: cart.totalPrice + cartItem.price,
        });
        break;

      case "MINUS":
        if (currQty > 1) {
          newCartItems[index].quantity--;
        } else {
          newCartItems = newCartItems.filter((item) => item !== cartItem);
        }
        setCart({
          ...cart,
          items: newCartItems,
          totalQuantity: --cart.totalQuantity,
          totalPrice: cart.totalPrice - cartItem.price,
        });
        break;

      case "DELETE":
        newCartItems = newCartItems.filter((item) => item !== cartItem);

        setCart({
          ...cart,
          items: newCartItems,
          totalQuantity: cart.totalQuantity - currQty,
          totalPrice: cart.totalPrice - cartItem.price * currQty,
        });
        break;

      default:
        return;
    }
  }

  return (
    <>
      <ListItem>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
            <Grid item py={1} xs={12} sm={7} md={7}>
              <ItemContainer>
                <Avatar
                  variant="square"
                  alt={cartItem.title}
                  sx={{ width: 60, height: 60 }}
                  src={cartItem.image}
                />
                <Stack
                  spacing={0}
                  p={0}
                  sx={{
                    alignItems: "flex-start",
                  }}
                >
                  <TitleContainer>{cartItem.title}</TitleContainer>
                  <TextContainer>
                    {`Category: ${cartItem.category}`}
                  </TextContainer>

                  <TextContainer>{`SGD: ${cartItem.price}.00`}</TextContainer>
                  <IconButton
                    aria-label="delete item"
                    onClick={() => {
                      manageItem(ACTION.DELETE);
                    }}
                    sx={{ padding: 0, opacity: 0.7 }}
                  >
                    <DeleteForeverOutlinedIcon fontSize="small" />
                  </IconButton>
                </Stack>
              </ItemContainer>
            </Grid>
            <Grid
              item
              py={1}
              xs={6}
              sm={2.5}
              md={2.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: {
                  md: "flex-end",
                  sm: "flex-end",
                  xs: "flex-start",
                },
              }}
            >
              <TextContainer px={1.5}>
                {`Quantity : ${cartItem.quantity}`}
              </TextContainer>

              <Stack spacing={2} direction="row">
                <IconButton
                  aria-label="add item"
                  onClick={() => {
                    manageItem(ACTION.ADD);
                  }}
                  sx={{ opacity: 0.7 }}
                >
                  <AddBoxOutlinedIcon fontSize="medium" />
                </IconButton>
                <IconButton
                  aria-label="minus item"
                  onClick={() => {
                    manageItem(ACTION.MINUS);
                  }}
                  sx={{ opacity: 0.7 }}
                >
                  <IndeterminateCheckBoxOutlinedIcon fontSize="medium" />
                </IconButton>
              </Stack>
            </Grid>
            <Grid
              item
              py={1}
              xs={6}
              sm={2.5}
              md={2.5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: {
                  md: "flex-start",
                  sm: "flex-start",
                  xs: "flex-end",
                },
              }}
            >
              <TextContainer p={0}>
                {`SGD ${cartItem.price * cartItem.quantity}.00`}
              </TextContainer>
            </Grid>
          </Grid>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
}
