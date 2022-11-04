import CardContainer from "../components/CardContainer";
// import Test from "../Test";
import { Box } from "@mui/material";
import NavigationBar from "../components/NavigationBar";

export default function Products() {
  //! show different LOGOUT button, if successful login.
  return (
    <Box>
      {/* <Test /> */}
      <NavigationBar />
      <CardContainer />
    </Box>
  );
}
