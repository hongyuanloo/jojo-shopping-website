import {
  Typography,
  Stack,
  ListItem,
  Avatar,
  styled,
  Divider,
  Grid,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function CartItem({ cartItem, cart, setCart }) {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: theme.typography.caption.fontSize,
  }));

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
            </Stack>
          </Grid>
          <Grid item xs={2} md={2}>
            <StyledTypography p={0} sx={{ fontSize: "13px" }}>
              {`Quantity : ${cartItem.quantity}`}
            </StyledTypography>
            <Stack spacing={2} direction="row" alignItems="center">
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
