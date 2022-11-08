import Announcement from "../components/announcement";
import NavigationBar from "../components/navigationBar";
import ShopContainer from "../components/shopContainer";
import Footer from "../components/footer";
import { Box } from "@mui/material";

export default function Shop() {
  return (
    <Box>
      <Announcement />
      <NavigationBar />
      <ShopContainer />
      <Footer />
    </Box>
  );
}
