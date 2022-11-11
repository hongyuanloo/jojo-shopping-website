import { Grid } from "@mui/material";
import { SubtotalContainer, TextContainer } from "../../styles/cartContainer";
import { Colors } from "../../styles/theme";

export default function CartSubTotal({ totalPrice }) {
  return (
    <Grid container spacing={0} p={2} sx={{ justifyContent: "flex-end" }}>
      <Grid item sx={{ textAlign: "right" }}>
        <SubtotalContainer
          component="span"
          sx={{ paddingRight: 3, color: Colors.text }}
        >
          Subtotal
        </SubtotalContainer>

        <TextContainer component="span">{`SGD ${totalPrice}.00`}</TextContainer>
      </Grid>
    </Grid>
  );
}
