import Announcement from "../components/announcement";
import NavigationBar from "../components/navigationBar";
import { Box } from "@mui/material";
import Banner from "../components/banner";
import AutoSlider from "../components/autoSlider";
import FeaturedProducts from "../components/featuredProducts";
import Footer from "../components/footer";

export default function Home() {
  return (
    <Box>
      <Announcement />
      <NavigationBar />
      <Banner />
      <AutoSlider />
      <FeaturedProducts />
      <Footer />
    </Box>
  );
}
